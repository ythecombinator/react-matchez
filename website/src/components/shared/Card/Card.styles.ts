import {
  alignItems,
  backgroundColor,
  borderRadius,
  boxShadow,
  classnames,
  display,
  flexDirection,
  fontSize,
  padding,
  position,
  textAlign,
} from 'tailwindcss-classnames';

export const container = classnames(
  position('relative'),
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  padding('p-6'),
  backgroundColor('bg-white', 'dark:bg-gray-900'),
  borderRadius('rounded'),
  boxShadow('shadow-2xl')
);

export const paragraph = classnames(
  fontSize('text-sm'),
  textAlign('text-center')
);
