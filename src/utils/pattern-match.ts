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
  // @ts-ignore
  // Reason: we want to enable developers to pass a parameter instead of a generic type.
  value?: Shape,
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
  value?: Shape,
  strict?: boolean
) => getPatternMatch<Shape, Strict>(value, strict);
