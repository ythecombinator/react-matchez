import React, { FunctionComponent } from 'react';

import Typography from 'components/shared/Typography';

import * as styles from './Card.styles';

export interface CardProps {
  title: string;
  description: string;
}

export const Card: FunctionComponent<CardProps> = (props) => {
  const { title, description } = props;

  return (
    <div>
      <div className={styles.container}>
        <Typography.h4>{title}</Typography.h4>
        <Typography.p className={styles.paragraph}>{description}</Typography.p>
      </div>
    </div>
  );
};
