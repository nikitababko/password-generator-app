import React from 'react';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';

import { LightTheme } from '../../utils/designTokens';

import { ThemeProviderProps } from './ThemeProvider.types';

export const ThemeProvider: React.FC<
  ThemeProviderProps
> = ({ children }) => {
  return (
    <ThemeProviderSC theme={LightTheme}>
      {children}
    </ThemeProviderSC>
  );
};
