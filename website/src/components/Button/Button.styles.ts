import clsx from 'clsx';
import {
  TArg,
  backgroundColor,
  classnames,
  fontWeight,
  margin,
  padding,
  textColor,
  textTransform,
  width,
} from 'tailwindcss-classnames';

const baseButton = clsx(
  'btn',
  classnames(
    margin('mb-4', 'sm:mb-0', 'sm:ml-4'),
    padding('px-12', 'py-4'),
    width('w-full', 'sm:w-auto'),
    fontWeight('font-bold'),
    textTransform('uppercase')
  )
) as TArg;

export const primaryButton = classnames(
  baseButton,
  textColor('text-white', 'hover:text-white'),
  backgroundColor('bg-blue-600', 'hover:bg-blue-700')
);

export const secondaryButton = classnames(
  baseButton,
  textColor('text-white', 'hover:text-white'),
  backgroundColor('bg-black', 'hover:bg-gray-900')
);
