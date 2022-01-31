import clsx from 'clsx';
import {
  classnames,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  margin,
  textColor,
} from 'tailwindcss-classnames';

export const p = classnames(
  textColor('text-gray-600', 'dark:text-gray-200'),
  fontSize('text-xl')
);

export const h2 = clsx('h2', classnames(margin('m-0')));

export const h3 = clsx('h3', classnames(margin('m-0')));

export const h4 = classnames(
  margin('mb-1'),
  fontSize('text-xl'),
  fontWeight('font-bold'),
  letterSpacing('tracking-tight'),
  lineHeight('leading-snug')
);
