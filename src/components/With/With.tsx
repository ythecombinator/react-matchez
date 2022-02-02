import React, { ReactNode } from 'react';

import isNil from 'lodash/isNil';

import { exceptions, invariant } from '../../_internals/error';
import { DeepPatternUnion } from '../../_internals/types';

export type WithProps<Shape extends {}> = DeepPatternUnion<Shape, false> & {
  /** Any node to be rendered when its other props match the `value`
   * defined on its parent. */
  children: ReactNode;
};

export function With<Shape extends {}>(props: WithProps<Shape>) {
  const { children, ...otherProps } = props;

  invariant(isNil(otherProps), exceptions.with.no_shape);
  invariant(isNil(children), exceptions.with.no_shape);

  return <>{children}</>;
}
