import React, { ReactNode } from 'react';
import { isNil } from 'lodash';

import { DeepPatternUnion } from '../../_internals/types';
import { exceptions, invariant } from '../../_internals/error';

export type WithProps<Shape, Strict extends boolean> = DeepPatternUnion<
  Shape,
  Strict
> & {
  /** Any node to be rendered when its other props match the `value`
   * defined on its `Match` parent. */
  children: ReactNode;
};

export function With<Shape, Strict extends boolean>(
  props: WithProps<Shape, Strict>
) {
  const { children, ...otherProps } = props;

  invariant(isNil(otherProps), exceptions.with.no_shape);
  invariant(isNil(children), exceptions.with.no_shape);

  return <>{children}</>;
}
