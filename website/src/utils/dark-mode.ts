import { useEffect } from 'react';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export const updateDarkModeClass = () => {
  if (!document) return;

  if (
    document.documentElement?.dataset?.theme === 'dark' &&
    !document.documentElement.classList.contains('dark')
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export const useDarkModeObserver = () => {
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type == 'attributes' &&
          mutation.attributeName === 'data-theme'
        ) {
          updateDarkModeClass();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      childList: false,
      subtree: false,
    });

    return () => {
      observer.disconnect();
    };
  }, [ExecutionEnvironment.canUseDOM]);
};
