import React, { FunctionComponent } from 'react';

import useThemeContext from '@theme/hooks/useThemeContext';

export interface CodePlaygroundProps {
  id: string;
  file: string;
  fontSize?: number;
  hideNavigation?: boolean;
}

export const CodePlayground: FunctionComponent<CodePlaygroundProps> = (
  props
) => {
  const { id, file, fontSize = 14, hideNavigation = true } = props;
  const { isDarkTheme } = useThemeContext();

  const theme = isDarkTheme ? 'dark' : 'light';
  const hideNav = hideNavigation ? '1' : '0';

  const params = new URLSearchParams({
    fontsize: String(fontSize),
    hidenavigation: hideNav,
    theme: theme,
    module: file,
  });

  return (
    <iframe
      src={`https://codesandbox.io/embed/${id}?${params.toString()}`}
      style={{
        width: '100%',
        height: '500px',
        border: 0,
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      title={id}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  );
};
