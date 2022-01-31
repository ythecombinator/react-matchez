import {
  backgroundClip,
  borderColor,
  borderRadius,
  boxShadow,
  classnames,
  display,
  fontSize,
  fontWeight,
  gridTemplateColumns,
  justifyContent,
  letterSpacing,
  lineHeight,
  margin,
  maxWidth,
  padding,
  position,
  textAlign,
  textColor,
} from 'tailwindcss-classnames';

// ----------------------------------------------------------------------
//
// title
//
// ----------------------------------------------------------------------

export const titleOuterContainer = classnames(
  padding('sm:px-6', 'px-16'),
  margin('my-4', 'xl:my-16')
);

export const titleInnerContainer = classnames(
  textAlign('text-center', 'xl:text-right')
);

export const titleHeading = classnames(
  display('block'),
  fontSize('text-5xl', 'md:text-6xl'),
  fontWeight('font-extrabold'),
  letterSpacing('tracking-tight'),
  lineHeight('leading-none')
);

export const titleButtonsContainer = classnames(
  margin('mt-8', 'mb-16'),
  display('flex'),
  justifyContent('justify-center', 'xl:justify-end')
);

export const titleSpan = classnames(display('block'));

export const titleSpanStyled = classnames(
  fontWeight('font-extrabold'),
  fontSize('text-8xl', 'md:text-9xl'),
  textColor('text-transparent'),
  backgroundClip('bg-clip-text')
);

// ----------------------------------------------------------------------
//
// video
//
// ----------------------------------------------------------------------

export const videoContainer = classnames(
  padding('px-8', 'sm:px-16', 'md:px-24', 'xl:px-4'),
  maxWidth('xl:max-w-3xl')
);

export const video = classnames(
  borderRadius('rounded-xl'),
  borderColor('border-gray-200'),
  boxShadow('shadow-2xl')
);

// ----------------------------------------------------------------------
//
// others
//
// ----------------------------------------------------------------------

export const section = classnames(position('relative'));

export const container = classnames(
  display('xl:grid'),
  gridTemplateColumns('xl:grid-cols-2'),
  margin('xl:my-24', 'md:my-16', 'my-8')
);
