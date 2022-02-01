import { Children, ReactElement } from 'react';

import { exceptions, invariant } from '../../_internals/error';
import {
  elementWithMetadataToElement,
  evaluate,
  nodesToElementWithMetadata,
  parseChildren,
} from '../../_internals/eval';

import {
  ExactProps,
  OtherwiseProps,
  WhenProps,
  WithProps,
} from '../../components';

export interface MatchProps<Shape extends {}> {
  /** Entry point to create a pattern-matching expression. */
  value?: Shape;
  /** The patterns the `value` prop should match. Can be represented as `With`, `When`, and `Otherwise`. */
  children: _MatchChildren<Shape>;
  /** Indicates whether anything that matches should render or only the first match.  */
  firstMatch?: boolean;
}

type _MatchChildren<Shape extends {}> =
  | ReactElement<WithProps<Shape>>
  | Array<ReactElement<WithProps<Shape>>>
  | ReactElement<ExactProps<Shape>>
  | Array<ReactElement<ExactProps<Shape>>>
  | ReactElement<WhenProps<Shape>>
  | Array<ReactElement<WhenProps<Shape>>>
  | ReactElement<OtherwiseProps>
  | Array<ReactElement<OtherwiseProps>>;

export function Match<Shape extends {}>(props: MatchProps<Shape>) {
  const { children, value, firstMatch = false } = props;

  const noChildren = Children.count(children) === 0;
  invariant(noChildren, exceptions.match.no_children);

  const elements = nodesToElementWithMetadata<Shape>(children);
  const {
    whenExpressions,
    withExpressions,
    exactExpressions,
    otherwiseExpressions,
  } = parseChildren(elements);

  const whenMatches = evaluate.when(whenExpressions, value);
  const withMatches = evaluate.with(withExpressions, value!);
  const exactMatches = evaluate.exact(exactExpressions, value!);
  const otherwiseMatch = evaluate.otherwise(otherwiseExpressions);

  return elementWithMetadataToElement(
    [...whenMatches, ...withMatches, ...exactMatches],
    firstMatch,
    otherwiseMatch
  );
}
