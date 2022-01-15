import { ComponentType } from 'react';

import {
  Match,
  MatchProps,
  When,
  WhenProps,
  With,
  WithProps,
  Otherwise,
} from '../components';

export const getPatternMatch = <Shape, Strict extends boolean>(
  /** Used here to mark the shape of the `value` prop to
   * be passed to the `Match` component.
   * */
  // @ts-ignore
  // Reason: we want to enable developers to pass a parameter instead of a generic type.
  value?: Shape,
  /** Indicates whether you want the compiler to make all the `Shape`
   * properties deeply `required` in order to match.
   * */
  // @ts-ignore
  // Reason: we want to enable developers to pass a parameter instead of a generic type.
  strict?: boolean
) => {
  const TypedMatch = Match as ComponentType<MatchProps<Shape>>;
  const TypedWhen = When as ComponentType<WhenProps<Shape>>;
  const TypedWith = With as ComponentType<WithProps<Shape, Strict>>;

  return { Match: TypedMatch, When: TypedWhen, With: TypedWith, Otherwise };
};

export const usePatternMatch = <Shape, Strict extends boolean>(
  /** Used here to mark the shape of the `value` prop to
   * be passed to the `Match` component.
   * */
  value?: Shape,
  /** Indicates whether you want the compiler to make all the `Shape`
   * properties deeply `required` in order to match.
   * */
  strict?: boolean
) => getPatternMatch<Shape, Strict>(value, strict);
