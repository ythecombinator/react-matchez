import {
  classnames,
  display,
  flexDirection,
  flexGrow,
  minHeight,
  overflow,
} from 'tailwindcss-classnames';

export const main = classnames(flexGrow('grow'));

export const container = classnames(
  display('flex'),
  flexGrow('grow'),
  flexDirection('flex-col'),
  minHeight('min-h-screen'),
  overflow('overflow-hidden')
);
