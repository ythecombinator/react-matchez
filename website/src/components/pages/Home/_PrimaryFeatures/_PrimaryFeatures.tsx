import React, { FunctionComponent } from 'react';

import heroVideoMP4 from '@site/static/img/hero.mp4';
import heroVideoPNG from '@site/static/img/hero.png';
import heroVideoWEBM from '@site/static/img/hero.webm';

import Typography from 'components/shared/Typography';

import PrimaryFeature from '../_PrimaryFeature';
import * as styles from './_PrimaryFeatures.styles';

const snippets = [
  `export type Data =
  | { type: "text"; content?: string }
  | { type: "img"; extension?: string };
  
export default function MyComponent() {
  const response = useApiRequest();

  const { Switch, Exact, With, Otherwise } = usePatternMatch<Data>();

  return (
    {/* Renders ONLY the first match */}
    <Switch value={response}>
      {/* Matches ANY image */}
      <With type="img">Image</With>
      {/* Compiler fails ("extension" not provided) */}
      <Exact type="img">Image</Exact>
      {/* Matches ONLY .jpg images */}
      <Exact type="img" extension="jpg">
          Image
      </Exact>
      {/* Matches ONLY .png images */}
      <Exact type="img" extension="png">
          Image
      </Exact>
      <Otherwise>Default</Otherwise>
    </Switch>
  );
}`,
  `const supportsSensor = () => Boolean(window.AmbientLightSensor);

const AmbientLight = React.lazy(() => import("./AmbientLight"));

const Fallback = React.lazy(() => import("./Fallback"));

export default function MyComponent() {
  const { Match, When, Otherwise } = usePatternMatch();

  return (
    <Suspense fallback={"Loading"}>
      <Match>
        <When predicate={supportsSensor}>
          <AmbientLight />
        </When>
        <Otherwise>
          <Fallback />
        </Otherwise>
      </Match>
    </Suspense>
  );
}`,
];

const hero = {
  mp4: heroVideoMP4,
  webm: heroVideoWEBM,
  png: heroVideoPNG,
};

export const PrimaryFeatures: FunctionComponent = () => {
  return (
    <article className={styles.section}>
      <PrimaryFeature
        title="Easy-to-reason-about, familiar, API"
        type="snippet"
        snippet={snippets[0]}
      >
        <Typography.p>
          Matching patterns isn't a new idea in the React world. We have plenty
          of domain-specific matching/branching solutions, like react-router
          (declarative matching for routes) and react-device-detect (declarative
          matching for device type).
        </Typography.p>
        <Typography.p>
          Besides the key core Match, With, and When components, react-matchez
          also provides you with extra helpers like Switch and Exact, inspired
          by react-router.
        </Typography.p>
      </PrimaryFeature>

      <PrimaryFeature
        title="Lorem ipsum dolor sit amet"
        type="video"
        defaultSrc={hero.mp4}
        webmSrc={hero.webm}
        fallback={hero.png}
      >
        <Typography.p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography.p>
        <Typography.p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Typography.p>
      </PrimaryFeature>

      <PrimaryFeature
        title="Match + React.Suspense + React.lazy() = 💖"
        type="snippet"
        snippet={snippets[1]}
      >
        <Typography.p>
          react-matchez plays really well with <b>Suspense/lazy</b> in scenarios
          of feature/browser/OS detection.
        </Typography.p>
        <Typography.p>
          Combine the three of them and you'll have your users downloading{' '}
          <b>only the actual component bundle</b> that matches your condition.
        </Typography.p>
      </PrimaryFeature>
    </article>
  );
};
