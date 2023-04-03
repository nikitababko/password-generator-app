import React from 'react';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';

import type { ThemeProviderProps } from './ThemeProvider.types';
import { useThemeProvider } from './ThemeProvider.controller';

export const ThemeProvider: React.FC<
  ThemeProviderProps
> = ({ children }) => {
  const { theme } = useThemeProvider();

  return (
    <ThemeProviderSC theme={theme}>
      {children}
    </ThemeProviderSC>
  );
};
