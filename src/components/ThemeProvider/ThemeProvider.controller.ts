import { useAppContext } from '../../store';

import { UseThemeProviderType } from './ThemeProvider.types';

export const useThemeProvider: UseThemeProviderType =
  () => {
    const [state] = useAppContext();

    return {
      theme: state.theme,
    };
  };
