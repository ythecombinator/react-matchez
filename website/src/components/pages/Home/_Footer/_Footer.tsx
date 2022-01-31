import React, { FunctionComponent } from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';

import Button from 'components/shared/Button';
import Typography from 'components/shared/Typography';

import * as styles from './_Footer.styles';

export const Footer: FunctionComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.textContainer}>
            <Typography.h2>Write better and safer code</Typography.h2>
            <Typography.p>
              Pattern matching lets you express complex conditions in a single,
              compact expression. Your code becomes shorter and more readable.
              Compiler-backed exactness checking ensures you thought of every
              possible property.
            </Typography.p>
          </div>

          <div className={styles.buttonsContainer}>
            <Button variant="secondary" href={useBaseUrl('docs/')}>
              Get started
            </Button>
            <Button
              href="https://github.com/ythecombinator/react-match"
              rel="noopener noreferrer"
              target="_blank"
            >
              Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
