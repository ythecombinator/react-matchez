import React, { PropsWithChildren } from 'react';
import { isNil } from 'lodash';

import { exceptions, invariant } from '../../_internals/error';

export interface WhenProps<Shape> {
  predicate: (value?: Shape) => boolean;
}

export function When<Shape>(props: PropsWithChildren<WhenProps<Shape>>) {
  const { children, predicate } = props;

  invariant(isNil(predicate), exceptions.when.no_predicate);
  invariant(isNil(children), exceptions.when.no_children);

  return <>{children}</>;
}
