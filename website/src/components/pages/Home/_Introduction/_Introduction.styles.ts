import {
  alignItems,
  classnames,
  display,
  flexDirection,
  flexWrap,
  gap,
  gridTemplateColumns,
  justifyContent,
  margin,
  maxWidth,
  padding,
  position,
  space,
  textAlign,
} from 'tailwindcss-classnames';

export const logoContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  space('space-x-2', 'md:space-x-8'),
  justifyContent('justify-center'),
  alignItems('items-center')
);

export const iframeContainer = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  flexWrap('flex-wrap'),
  margin('mt-6')
);

export const textContainer = classnames(
  textAlign('text-center'),
  padding('pb-36', 'md:pb-40'),
  margin('mx-auto'),
  maxWidth('max-w-3xl')
);

export const innerContainer = classnames(
  position('relative'),
  display('flex'),
  justifyContent('justify-center'),
  margin('mb-12')
);

export const outerContainer = classnames(
  position('relative'),
  padding('px-4', 'sm:px-6'),
  margin('mx-auto'),
  maxWidth('max-w-6xl')
);

export const section = classnames(position('relative'));
