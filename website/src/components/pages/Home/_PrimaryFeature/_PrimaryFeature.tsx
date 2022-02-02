import React, { FunctionComponent } from 'react';

import CodePreview from 'components/shared/CodePreview';
import Typography from 'components/shared/Typography';

import { usePatternMatch } from '../../../../../../dist';
import * as styles from './_PrimaryFeature.styles';

interface PrimaryFeatureCodeSnippetProps {
  snippet: string;
}

interface PrimaryFeatureVideoProps {
  video: string;
}

export type PrimaryFeatureProps =
  | ({
      title: string;
      type: 'snippet';
    } & PrimaryFeatureCodeSnippetProps)
  | ({
      title: string;
      type: 'video';
    } & PrimaryFeatureVideoProps);

const PrimaryFeatureCodeSnippet: FunctionComponent<
  PrimaryFeatureCodeSnippetProps
> = (props) => {
  const { snippet } = props;

  return (
    <div className={styles.featureCodeBlockContainer}>
      <CodePreview>{snippet}</CodePreview>
    </div>
  );
};

const PrimaryFeatureVideo: FunctionComponent<PrimaryFeatureVideoProps> = (
  props
) => {
  const { video } = props;

  return (
    <div className={styles.featureVideoContainer}>
      <video
        className={styles.featureVideo}
        width="100%"
        loop
        autoPlay
        muted
        controls
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export const PrimaryFeature: FunctionComponent<PrimaryFeatureProps> = (
  props
) => {
  const { title, children, ...otherProps } = props;
  const { Match, With, Otherwise } = usePatternMatch(props);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.sectionsContainer}>
          <div className={styles.firstSection}>
            <div className={styles.paragraphContainer}>
              <div className={styles.titleContainer}>
                <Typography.h3>{title}</Typography.h3>
              </div>
              {children}
            </div>
          </div>
          <div className={styles.secondSection}>
            <Match value={props}>
              <With type="video">
                <PrimaryFeatureVideo
                  video={(otherProps as PrimaryFeatureVideoProps).video}
                />
              </With>
              <With type="snippet">
                <PrimaryFeatureCodeSnippet
                  snippet={
                    (otherProps as PrimaryFeatureCodeSnippetProps).snippet
                  }
                />
              </With>
              <Otherwise>Fallback.</Otherwise>
            </Match>
          </div>
        </div>
      </div>
    </div>
  );
};
