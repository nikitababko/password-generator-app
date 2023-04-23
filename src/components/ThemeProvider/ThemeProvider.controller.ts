import { useAppContext } from '../../store';

import type { UseControllerType } from './ThemeProvider.types';

export const useController: UseControllerType = () => {
  const [state] = useAppContext();

  return {
    theme: state.theme,
  };
};
