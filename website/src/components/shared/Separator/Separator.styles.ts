import clsx from 'clsx';
import {
  backgroundColor,
  classnames,
  height,
  inset,
  margin,
  padding,
  translate,
  width,
} from 'tailwindcss-classnames';

export const container = clsx(
  'transform',
  classnames(
    margin('mt-24', 'mb-24', 'm-auto'),
    backgroundColor('bg-gray-200'),
    translate('translate-y-1/2'),
    inset('left-0', 'right-0', 'bottom-0'),
    height('h-20'),
    padding('p-px'),
    width('w-px')
  )
);
