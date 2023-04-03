import { useState } from 'react';

import { useAppContext } from '../../store';
import {
  DarkTheme,
  LightTheme,
} from '../../utils/designTokens';

import { UseThemeToggleType } from './ThemeToggle.types';
import { themeToggleAction } from '../../store/appActions.actions';

export const useThemeToggle: UseThemeToggleType = () => {
  const [isDay, setIsDay] = useState<boolean>(true);

  const [, dispatch] = useAppContext();

  const handleClick = () => {
    setIsDay((prevState) => !prevState);

    if (!isDay) {
      dispatch(themeToggleAction(LightTheme));
    } else {
      dispatch(themeToggleAction(DarkTheme));
    }
  };

  return {
    handleClick,
    isDay,
  };
};
