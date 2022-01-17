import React, { ReactNode } from 'react';
import isNil from 'lodash/isNil';

import { exceptions, invariant } from '../../_internals/error';

export interface WhenProps<Shape> {
  /** Any node to be rendered when the predicate matches. */
  children: ReactNode;
  /** Condition to be satisfied for the `children` to be rendered.
   * If the `value` prop was passed to its `Match` parent, then this predicate
   * will expose it as its first parameter. */
  predicate: (value?: Shape) => boolean;
}

export function When<Shape>(props: WhenProps<Shape>) {
  const { children, predicate } = props;

  invariant(isNil(predicate), exceptions.when.no_predicate);
  invariant(isNil(children), exceptions.when.no_children);

  return <>{children}</>;
}
