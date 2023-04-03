import type React from 'react';

import type { ThemeType } from '../../utils/designTokens/designTokens.types';

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type UseThemeProviderType = () => {
  theme: ThemeType;
};
