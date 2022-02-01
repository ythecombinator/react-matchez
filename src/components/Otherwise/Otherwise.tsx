import React, { ReactNode } from 'react';

import isNil from 'lodash/isNil';

import { exceptions, invariant } from '../../_internals/error';

export interface OtherwiseProps {
  /** Any node to be rendered when nothing matches `With` and `When` siblings. */
  children: ReactNode;
}

export function Otherwise(props: OtherwiseProps) {
  const { children } = props;

  invariant(isNil(children), exceptions.when.no_predicate);

  return <>{children}</>;
}
