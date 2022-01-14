import React, { ReactNode } from 'react';
import { isNil } from 'lodash';

import { exceptions, invariant } from '../../_internals/error';

export interface OtherwiseProps {
  children: ReactNode;
}

export function Otherwise(props: OtherwiseProps) {
  const { children } = props;

  invariant(isNil(children), exceptions.when.no_predicate);

  return <>{children}</>;
}
