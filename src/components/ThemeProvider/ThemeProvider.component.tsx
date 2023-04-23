import React from 'react';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';

import type { Props } from './ThemeProvider.types';
import { useController } from './ThemeProvider.controller';

export const ThemeProvider: React.FC<Props> = ({
  children,
}) => {
  const { theme } = useController();

  return (
    <ThemeProviderSC theme={theme}>
      {children}
    </ThemeProviderSC>
  );
};
