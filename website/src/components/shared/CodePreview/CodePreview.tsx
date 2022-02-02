import React, { FunctionComponent } from 'react';

import { PrismLight as PrismCodePreview } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import { dracula, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import useThemeContext from '@theme/hooks/useThemeContext';

import * as styles from './CodePreview.styles';

export interface CodePreviewProps {
  children: string;
}

PrismCodePreview.registerLanguage('tsx', tsx);

export const CodePreview: FunctionComponent<CodePreviewProps> = (props) => {
  const { children } = props;
  const { isDarkTheme } = useThemeContext();

  return (
    <PrismCodePreview
      className={styles.container}
      language={'tsx'}
      customStyle={{ padding: '1rem' }}
      wrapLongLines
      showLineNumbers={false}
      style={isDarkTheme ? dracula : prism}
    >
      {children}
    </PrismCodePreview>
  );
};

export default CodePreview;
