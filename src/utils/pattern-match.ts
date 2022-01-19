import { ComponentType } from 'react';

import {
  Match,
  MatchProps,
  When,
  WhenProps,
  With,
  WithProps,
  Exact,
  ExactProps,
  Otherwise,
} from '../components';

export const getPatternMatch = <Shape extends {}>(
  /** Used here to mark the shape of the `value` prop to
   * be passed to the `Match` component.
   * */
  // @ts-ignore
  // Reason: we want to enable developers to pass a parameter instead of a generic type.
  value?: Shape
  /** Indicates whether you want the compiler to make all the `Shape`
   * properties deeply `required` in order to match.
   * */
) => {
  const TypedMatch = Match as ComponentType<MatchProps<Shape>>;
  const TypedWhen = When as ComponentType<WhenProps<Shape>>;
  const TypedWith = With as ComponentType<WithProps<Shape>>;
  const TypedExact = Exact as ComponentType<ExactProps<Shape>>;

  return {
    Match: TypedMatch,
    When: TypedWhen,
    With: TypedWith,
    Exact: TypedExact,
    Otherwise,
  };
};

export const usePatternMatch = <Shape extends {}>(
  /** Used here to mark the shape of the `value` prop to
   * be passed to the `Match` component.
   * */
  value?: Shape
) => getPatternMatch<Shape>(value);
