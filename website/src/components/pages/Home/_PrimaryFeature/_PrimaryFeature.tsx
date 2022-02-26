import React, { FunctionComponent } from 'react';

import CodePreview from 'components/shared/CodePreview';
import Typography from 'components/shared/Typography';
import Video, { VideoProps } from 'components/shared/Video';

import { usePatternMatch } from '../../../../../../dist';
import * as styles from './_PrimaryFeature.styles';

interface PrimaryFeatureCodeSnippetProps {
  snippet: string;
}

interface PrimaryFeatureVideoProps extends VideoProps {}

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
  return (
    <div className={styles.featureVideoContainer}>
      <Video className={styles.featureVideo} controls {...props} />
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
                  {...(otherProps as PrimaryFeatureVideoProps)}
                />
              </With>
              <With type="snippet">
                <PrimaryFeatureCodeSnippet
                  snippet={
                    (otherProps as PrimaryFeatureCodeSnippetProps).snippet
                  }
                />
              </With>
              <Otherwise>Media type not supported.</Otherwise>
            </Match>
          </div>
        </div>
      </div>
    </div>
  );
};
