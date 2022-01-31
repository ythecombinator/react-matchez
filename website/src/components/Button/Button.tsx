import React, { AnchorHTMLAttributes, FunctionComponent } from 'react';

import * as styles from './Button.styles';

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
}

const classNameVariantMapping: Record<
  Required<ButtonProps>['variant'],
  string
> = {
  primary: styles.primaryButton,
  secondary: styles.secondaryButton,
};

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const { variant = 'primary', children, ...otherProps } = props;
  return (
    <a className={classNameVariantMapping[variant]} {...otherProps}>
      {children}
    </a>
  );
};

export default Button;
