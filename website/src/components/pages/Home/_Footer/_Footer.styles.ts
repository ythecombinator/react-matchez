import {
  classnames,
  display,
  justifyContent,
  margin,
  maxWidth,
  padding,
  position,
  textAlign,
} from 'tailwindcss-classnames';

export const buttonsContainer = classnames(
  display('flex'),
  justifyContent('justify-center')
);

export const textContainer = classnames(
  textAlign('text-center'),
  padding('pb-12', 'md:pb-16'),
  margin('mx-auto'),
  maxWidth('max-w-3xl')
);

export const innerContainer = classnames(padding('py-12', 'md:py-20'));

export const outerContainer = classnames(
  textAlign('text-center'),
  padding('px-4', 'sm:px-6'),
  margin('mx-auto', 'mb-16'),
  maxWidth('max-w-6xl')
);

export const section = classnames(position('relative'));
