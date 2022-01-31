import React, { FunctionComponent, Suspense, lazy } from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';

import heroVideo from '@site/static/img/hero.mp4';

import Button from 'components/Button';

import * as styles from './_Hero.styles';

const LazyAnimationShader = lazy(() => import('components/AnimationShader'));

export const Hero: FunctionComponent = () => {
  const fallback = (
    <canvas
      style={{
        height: '1000px',
        width: '100vh',
        maxHeight: '1000px',
        position: 'fixed',
        transform: `translateY(60px)`,
        top: 0,
        zIndex: -10,
      }}
    />
  );

  return (
    <section
      className={styles.section}
      style={{
        isolation: 'isolate',
      }}
    >
      <BrowserOnly fallback={fallback}>
        {() => (
          <Suspense fallback={fallback}>
            <LazyAnimationShader />
          </Suspense>
        )}
      </BrowserOnly>

      <div className={styles.container}>
        {/* Title */}
        <div className={styles.titleOuterContainer}>
          <div className={styles.titleInnerContainer}>
            <h1 className={styles.titleHeading}>
              <span className={styles.titleSpan}>Declarative, typed,</span>

              <span
                className={styles.titleSpanStyled}
                style={{
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  backgroundImage:
                    'linear-gradient(to right, #FF8008, #2BC0E4)',
                }}
              >
                pattern matching
              </span>

              <span className={styles.titleSpan}>for React</span>
            </h1>
            <div className={styles.titleButtonsContainer}>
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
        {/* Video */}
        <div className={styles.videoContainer}>
          <video className={styles.video} width="100%" loop autoPlay muted>
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
