import React, { FunctionComponent, useEffect } from 'react';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import Layout from '@theme/Layout';

import Separator from 'components/shared/Separator';

import { updateDarkModeClass, useDarkModeObserver } from 'utils/dark-mode';

import * as styles from './Home.styles';
import Footer from './_Footer';
import Hero from './_Hero';
import Introduction from './_Introduction';
import PrimaryFeatures from './_PrimaryFeatures';
import SecondaryFeatures from './_SecondaryFeatures';

export const Home: FunctionComponent = () => {
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      updateDarkModeClass();
    }
  }, [ExecutionEnvironment.canUseDOM]);

  useDarkModeObserver();

  return (
    <Layout description="Declarative, typed, pattern matching library for React.">
      <div className={styles.container}>
        <main className={styles.main}>
          <Hero />
          <Separator />
          <Introduction />
          <PrimaryFeatures />
          <Separator />
          <SecondaryFeatures />
          <Separator />
          <Footer />
        </main>
      </div>
    </Layout>
  );
};

export default Home;
