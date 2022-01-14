import { isEmpty, isNull } from 'lodash';
import { isMatching } from 'ts-pattern';

import { When, WhenProps } from '../components/When';
import { With } from '../components/With';
import { Otherwise } from '../components/Otherwise';

import {
  ElementWithMetadata,
  ElementWithMetadataUnion,
  MatchWithCase,
} from './types';
import { exceptions, invariant } from './error';

// WHEN

export function isWhen<Shape>(
  child: ElementWithMetadataUnion<Shape>
): child is ElementWithMetadata<WhenProps<Shape>> {
  return child.element.type === When;
}

export function whenMatcher<Shape>(value?: Shape) {
  return (child: ElementWithMetadata<WhenProps<Shape>>) =>
    child.element.props.predicate(value);
}

export function evaluateWhenExpression<Shape>(
  childrenArr: Array<ElementWithMetadata<WhenProps<Shape>>>,
  value?: Shape
) {
  if (childrenArr.length === 0) {
    return [];
  }

  return childrenArr.filter(whenMatcher(value)).map((item) => ({
    element: item.element,
    position: item.position,
  }));
}

// WITH

export function isWith<Shape>(
  child: ElementWithMetadataUnion<Shape>
): child is ElementWithMetadata<Shape> {
  return child.element.type === With;
}

export function withMatcher<Shape>(value: Shape) {
  return (instance: MatchWithCase<Shape>) => {
    const isMatch = isMatching(value, instance.pattern);
    return isMatch;
  };
}

export function evaluateWithExpression<Shape>(
  childrenArr: ElementWithMetadata<Shape>[],
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
      pattern: childrenPattern,
    } as MatchWithCase<Shape>;
  });

  return cases.filter(withMatcher(value)).map((item) => ({
    element: item.element,
    position: item.position,
  })) as Array<ElementWithMetadata<Shape>>;
}

// Otherwise

export function isOtherwise<Shape>(
  child: ElementWithMetadataUnion<Shape>
): child is ElementWithMetadata<Shape> {
  return child.element.type === Otherwise;
}

export function evaluateOtherwiseExpression<Shape>(
  otherwiseProp: JSX.Element,
  otherwiseChildren: ElementWithMetadata<Shape>[]
) {
  const noCase = isEmpty(otherwiseChildren) && isNull(otherwiseProp);
  invariant(noCase, exceptions.match.no_otherwise);

  const multipleCases = !isEmpty(otherwiseChildren) && Boolean(otherwiseProp);
  invariant(multipleCases, exceptions.match.multiple_otherwise);

  const multipleChildren = otherwiseChildren.length > 1;
  invariant(multipleChildren, exceptions.match.multiple_otherwise);

  return otherwiseProp ?? otherwiseChildren[0].element;
}
