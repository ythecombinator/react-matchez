import clsx from 'clsx';

import React, { FunctionComponent, HTMLAttributes } from 'react';

import * as styles from './Typography.styles';

// ----------------------------------------------------------------------
//
// p
//
// ----------------------------------------------------------------------

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

const P: FunctionComponent<ParagraphProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <p {...otherProps} className={clsx(styles.p, className)}>
      {children}
    </p>
  );
};

// ----------------------------------------------------------------------
//
// h
//
// ----------------------------------------------------------------------

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

// ----------------------------------------------------------------------
//
// h2
//
// ----------------------------------------------------------------------

const H2: FunctionComponent<HeadingProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <h2 {...otherProps} className={clsx(styles.h2, className)}>
      {children}
    </h2>
  );
};

// ----------------------------------------------------------------------
//
// h3
//
// ----------------------------------------------------------------------

const H3: FunctionComponent<HeadingProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <h3 {...otherProps} className={clsx(styles.h3, className)}>
      {children}
    </h3>
  );
};

// ----------------------------------------------------------------------
//
// h4
//
// ----------------------------------------------------------------------

const H4: FunctionComponent<HeadingProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <h4 {...otherProps} className={clsx(styles.h4, className)}>
      {children}
    </h4>
  );
};

export const Typography = {
  p: P,
  h2: H2,
  h3: H3,
  h4: H4,
};
