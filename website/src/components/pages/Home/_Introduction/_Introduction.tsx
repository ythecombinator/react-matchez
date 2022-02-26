import React, { FunctionComponent } from 'react';

import Logo from '@site/static/img/logo.svg';

import Typography from 'components/shared/Typography';

import * as styles from './_Introduction.styles';

export const Introduction: FunctionComponent = () => {
  return (
    <article className={styles.section}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.logoContainer}>
            <Logo width={300} />
          </div>
        </div>

        <div className={styles.textContainer}>
          <Typography.h2>No more if/else/switch</Typography.h2>
          <Typography.p>
            <b>react-matchez</b> is a <b>first-class-React</b>, <b>generic</b>,{' '}
            <b>strongly-typed</b>, solution that you can use to build your own
            domain-specific matching solutions—and reduce drastically the{' '}
            <b>if/else/switch</b> boilerplate from your components.
          </Typography.p>
          <div className={styles.iframeContainer}>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true&size=large"
              scrolling="0"
              width="170"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
        </div>
      </div>
    </article>
  );
};
