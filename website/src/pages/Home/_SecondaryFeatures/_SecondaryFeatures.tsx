import React, { FunctionComponent } from 'react';

import Card from 'components/Card';
import Typography from 'components/Typography';

import * as styles from './_SecondaryFeatures.styles';

const features = [
  {
    title: 'Works on any data structure',
    description:
      'Nested objects, arrays, tuples, Sets, Maps and all primitive types.',
  },
  {
    title: 'Expressive, typesafe, API',
    description:
      'Helpful type inference + support for predicates and not patterns for more complex scenarios.',
  },
  {
    title: 'Exact matching support',
    description:
      'Enforces that you are matching every possible part of your shape.',
  },
  {
    title: '~7.4 kB',
    description:
      "A small bundle footprint that doesn't impact a lot your final bundle size.",
  },
];

export const SecondaryFeatures: FunctionComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.textContainer}>
            <Typography.h2>Full set of features</Typography.h2>
            <Typography.p>
              Everything you need to bring declarative code branching to your
              apps.
            </Typography.p>
          </div>

          <div className={styles.featuresContainer}>
            {features.map((feature) => (
              <Card
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
