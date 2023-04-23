import React from 'react';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';

import type { Props } from './ThemeProvider.types';
import { useThemeProvider } from './ThemeProvider.controller';

export const ThemeProvider: React.FC<Props> = ({
  children,
}) => {
  const { theme } = useThemeProvider();

  return (
    <ThemeProviderSC theme={theme}>
      {children}
    </ThemeProviderSC>
  );
};
