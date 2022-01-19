import { Children, createElement, Fragment, ReactNode } from 'react';
import { isMatching } from 'ts-pattern';
import isEmpty from 'lodash/isEmpty';
import pick from 'lodash/pick';

import { When, WhenProps } from '../components/When';
import { With, WithProps } from '../components/With';
import { Exact, ExactProps } from '../components/Exact';
import { Otherwise } from '../components/Otherwise';

import {
  ElementWithMetadata,
  ElementWithMetadataUnion,
  MatchWithCase,
  PatternUnion,
} from './types';
import { exceptions, invariant } from './error';

// ----------------------------------------------------------------------
//
// is.<pattern>
//
// ----------------------------------------------------------------------

export function isWhen<Shape extends {}>(
  child: ElementWithMetadataUnion<Shape>
): child is ElementWithMetadata<WhenProps<Shape>> {
  return child.element.type === When;
}

export function isWith<Shape extends {}>(
  child: ElementWithMetadataUnion<Shape>
): child is ElementWithMetadata<WithProps<Shape>> {
  return child.element.type === With;
}

export function isExact<Shape extends {}>(
  child: ElementWithMetadataUnion<Shape>
): child is ElementWithMetadata<ExactProps<Shape>> {
  return child.element.type === Exact;
}

export function isOtherwise<Shape extends {}>(
  child: ElementWithMetadataUnion<Shape>
): child is ElementWithMetadata<Shape> {
  return child.element.type === Otherwise;
}

export const is = {
  with: isWith,
  when: isWhen,
  exact: isExact,
  otherwise: isOtherwise,
};

// ----------------------------------------------------------------------
//
// match.<pattern>
//
// ----------------------------------------------------------------------

export function whenMatcher<Shape extends {}>(value?: Shape) {
  return (child: ElementWithMetadata<WhenProps<Shape>>) =>
    child.element.props.predicate(value);
}

export function withMatcher<Shape extends {}>(value: Shape) {
  return (instance: MatchWithCase<Shape>) =>
    isMatching(pick(value, Object.keys(instance.pattern)), instance.pattern);
}

export function exactMatcher<Shape extends {}>(value: Shape) {
  return (instance: MatchWithCase<Shape>) =>
    isMatching(value, instance.pattern);
}

export const match = {
  with: withMatcher,
  when: whenMatcher,
  exact: exactMatcher,
};

// ----------------------------------------------------------------------
//
// evaluate.<pattern>
//
// ----------------------------------------------------------------------

export function evaluateWhenExpression<Shape extends {}>(
  childrenArr: Array<ElementWithMetadata<WhenProps<Shape>>>,
  value?: Shape
) {
  if (childrenArr.length === 0) {
    return [];
  }

  return childrenArr.filter(match.when(value)).map((item) => ({
    element: item.element,
    position: item.position,
  }));
}

export function evaluateShapeExpression<Shape extends {}>(
  matcher: typeof withMatcher | typeof exactMatcher,
  childrenArr: Array<ElementWithMetadata<WithProps<Shape>>>,
  value: Shape
) {
  if (childrenArr.length === 0) {
    return [];
  }

  const cases = childrenArr.map((children) => {
    const { children: childrenChild, ...childrenPattern } =
      children.element.props;

    return {
      element: childrenChild,
      position: children.position,
      pattern: childrenPattern as PatternUnion<Shape>,
    } as MatchWithCase<Shape>;
  });

  return cases.filter(matcher(value)).map((item) => ({
    element: item.element,
    position: item.position,
  })) as Array<ElementWithMetadata<Shape>>;
}

export function evaluateWithExpression<Shape extends {}>(
  childrenArr: Array<ElementWithMetadata<WithProps<Shape>>>,
  value: Shape
) {
  return evaluateShapeExpression(match.with, childrenArr, value);
}

export function evaluateExactExpression<Shape extends {}>(
  childrenArr: Array<ElementWithMetadata<WithProps<Shape>>>,
  value: Shape
) {
  return evaluateShapeExpression(match.exact, childrenArr, value);
}

export function evaluateOtherwiseExpression<Shape extends {}>(
  otherwiseExpressions: Array<ElementWithMetadata<Shape>>
) {
  const noCase = isEmpty(otherwiseExpressions);
  invariant(noCase, exceptions.match.no_otherwise);

  const multipleChildren = otherwiseExpressions.length > 1;
  invariant(multipleChildren, exceptions.match.multiple_otherwise);

  return otherwiseExpressions[0].element;
}

export const evaluate = {
  with: evaluateWithExpression,
  exact: evaluateExactExpression,
  when: evaluateWhenExpression,
  otherwise: evaluateOtherwiseExpression,
};

// ----------------------------------------------------------------------
//
// Main parsing/conversion utilities
//
// ----------------------------------------------------------------------

export function parseChildren<Shape extends {}>(
  children: Array<
    | ElementWithMetadata<Shape>
    | ElementWithMetadata<WhenProps<Shape>>
    | ElementWithMetadata<WithProps<Shape>>
  >
) {
  const whenExpressions: Array<ElementWithMetadata<WhenProps<Shape>>> = [];
  const withExpressions: Array<ElementWithMetadata<WithProps<Shape>>> = [];
  const exactExpressions: Array<ElementWithMetadata<ExactProps<Shape>>> = [];
  const otherwiseExpressions: Array<ElementWithMetadata<{}>> = [];

  children.forEach((child) => {
    if (is.when(child)) {
      whenExpressions.push(child);
    } else if (is.with(child)) {
      withExpressions.push(child);
    } else if (is.exact(child)) {
      exactExpressions.push(child);
    } else if (is.otherwise(child)) {
      otherwiseExpressions.push(child);
    } else {
      throw new Error(exceptions.match.invalid_children);
    }
  });

  return {
    whenExpressions,
    withExpressions,
    exactExpressions,
    otherwiseExpressions,
  };
}

export function nodesToElementWithMetadata<Shape extends {}>(
  children: ReactNode
) {
  return Children.toArray(children).map((element, idx) => ({
    element: element,
    position: idx,
  })) as Array<ElementWithMetadata<Shape>>;
}

export function elementWithMetadataToElement<Shape extends {}>(
  children: Array<ElementWithMetadataUnion<Shape>>,
  isFirst: boolean,
  otherwise: JSX.Element
) {
  const elements = [...children]
    .sort((a, b) => (a.position > b.position ? 1 : -1))
    .map((result) => result.element);

  if (elements.length === 0) {
    return createElement(Fragment, {}, otherwise);
  }

  if (isFirst) {
    return createElement(Fragment, {}, elements[0]);
  }

  return createElement(Fragment, {}, ...elements);
}
