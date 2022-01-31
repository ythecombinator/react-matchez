import {
  alignItems,
  classnames,
  display,
  gap,
  gridTemplateColumns,
  margin,
  maxWidth,
  padding,
  position,
  textAlign,
} from 'tailwindcss-classnames';

export const featuresContainer = classnames(
  maxWidth('max-w-sm', 'md:max-w-2xl', 'lg:max-w-none'),
  margin('mx-auto'),
  display('grid'),
  gap('gap-6'),
  gridTemplateColumns('md:grid-cols-2', 'lg:grid-cols-3'),
  alignItems('items-start')
);

export const textContainer = classnames(
  textAlign('text-center'),
  padding('pb-12', 'md:pb-20'),
  margin('mx-auto'),
  maxWidth('max-w-3xl')
);

export const innerContainer = classnames(padding('py-12', 'md:py-20'));

export const outerContainer = classnames(
  position('relative'),
  padding('px-4', 'sm:px-6'),
  margin('mx-auto'),
  maxWidth('max-w-6xl')
);

export const section = classnames(position('relative'));
