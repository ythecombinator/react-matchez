import { PrismLight as PrismSyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import { dracula, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React, { FunctionComponent } from 'react';

import useThemeContext from '@theme/hooks/useThemeContext';

import * as styles from './SyntaxHighlighter.styles';

export interface SyntaxHighlighterProps {
  children: string;
}

PrismSyntaxHighlighter.registerLanguage('tsx', tsx);

export const SyntaxHighlighter: FunctionComponent<SyntaxHighlighterProps> = (
  props
) => {
  const { children } = props;
  const { isDarkTheme } = useThemeContext();

  return (
    <PrismSyntaxHighlighter
      className={styles.container}
      language={'tsx'}
      customStyle={{ padding: '1rem' }}
      wrapLongLines
      showLineNumbers={false}
      style={isDarkTheme ? dracula : prism}
    >
      {children}
    </PrismSyntaxHighlighter>
  );
};

export default SyntaxHighlighter;
