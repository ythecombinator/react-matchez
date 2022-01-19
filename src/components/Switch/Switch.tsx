import React from 'react';

import { Match, MatchProps } from '../Match';

export type SwitchProps<Shape extends {}> = Omit<
  MatchProps<Shape>,
  'firstMatch'
>;

export function Switch<Shape extends {}>(props: SwitchProps<Shape>) {
  return <Match {...props} firstMatch={true} />;
}
