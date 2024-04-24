import React from 'react';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';

import type { Props } from './ThemeProvider.types';
import { useThemeStore } from '../../store';

export const ThemeProvider: React.FC<Props> = ({
  children,
}) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <ThemeProviderSC theme={theme}>
      {children}
    </ThemeProviderSC>
  );
};
