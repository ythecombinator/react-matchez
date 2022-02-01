import React, { ReactNode } from 'react';

import isNil from 'lodash/isNil';

import { exceptions, invariant } from '../../_internals/error';
import { DeepPatternUnion } from '../../_internals/types';

export type ExactProps<Shape extends {}> = DeepPatternUnion<Shape, true> & {
  /** Any node to be rendered when its other props match the `value`
   * defined on its `Match` parent. */
  children: ReactNode;
};

export function Exact<Shape extends {}>(props: ExactProps<Shape>) {
  const { children, ...otherProps } = props;

  invariant(isNil(otherProps), exceptions.exact.no_shape);
  invariant(isNil(children), exceptions.exact.no_shape);

  return <>{children}</>;
}
