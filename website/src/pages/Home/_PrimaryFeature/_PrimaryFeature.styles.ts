import clsx from 'clsx';
import {
  alignItems,
  borderColor,
  borderRadius,
  boxShadow,
  classnames,
  display,
  flexDirection,
  fontFamily,
  gap,
  gridColumn,
  gridTemplateColumns,
  margin,
  maxWidth,
  padding,
  position,
  width,
} from 'tailwindcss-classnames';

export const outerContainer = classnames(
  position('relative'),
  maxWidth('max-w-6xl'),
  margin('mx-auto'),
  padding('px-4', 'sm:px-6')
);

export const innerContainer = classnames(padding('pt-12', 'md:pt-20'));

export const sectionsContainer = classnames(
  display('md:grid'),
  gridTemplateColumns('md:grid-cols-12'),
  gap('md:gap-6')
);

export const titleContainer = classnames(
  display('flex'),
  alignItems('items-center'),
  margin('mb-3')
);

export const paragraphContainer = classnames(
  padding('xl:pr-16', 'lg:pr-12', 'md:pr-4'),
  margin('mb-8')
);

export const firstSection = classnames(
  display('flex'),
  alignItems('items-center'),
  maxWidth('max-w-xl', 'md:max-w-none'),
  width('md:w-full'),
  margin('mx-auto', 'md:mt-6'),
  gridColumn('md:col-span-7', 'lg:col-span-6')
);

export const secondSection = classnames(
  display('flex'),
  alignItems('items-center'),
  maxWidth('max-w-xl', 'md:max-w-none'),
  width('md:w-full'),
  margin('mx-auto', 'mb-8', 'md:mb-0'),
  gridColumn('md:col-span-5', 'lg:col-span-6')
);

// Specific types

export const featureVideoContainer = classnames(padding('p-4'));

export const featureVideo = classnames(
  borderRadius('rounded-xl'),
  boxShadow('shadow-2xl'),
  borderColor('border-gray-200')
);

export const featureCodeBlockContainer = clsx(
  'custom-code-block',
  classnames(
    position('relative'),
    flexDirection('flex-col'),
    fontFamily('font-mono')
  )
);
