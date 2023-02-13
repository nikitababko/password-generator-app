import { useAppContext } from '../../store';

import { UseThemeProviderType } from './ThemeProvider.types';

export const useThemeProvider: UseThemeProviderType =
  () => {
    const {
      theme: [theme],
    } = useAppContext();

    return {
      theme,
    };
  };
