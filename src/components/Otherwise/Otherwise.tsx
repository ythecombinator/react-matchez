import React, { PropsWithChildren, ReactNode } from 'react';
import { isNil } from 'lodash';

import { exceptions, invariant } from '../../_internals/error';

export function Otherwise(
  props: PropsWithChildren<{
    children: ReactNode;
  }>
) {
  const { children } = props;

  invariant(isNil(children), exceptions.when.no_predicate);

  return <>{children}</>;
}
