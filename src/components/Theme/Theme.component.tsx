import React from 'react';
import { ThemeProvider } from 'styled-components';

import { LightTheme } from '../../utils/designTokens';

import { ThemeProps } from './Theme.types';

export const Theme: React.FC<ThemeProps> = ({
  children,
}) => (
  <ThemeProvider theme={LightTheme}>
    {children}
  </ThemeProvider>
);
