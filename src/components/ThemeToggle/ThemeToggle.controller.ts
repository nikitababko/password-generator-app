import { useEffect, useState } from 'react';

import { useAppContext } from '../../store';
import {
  DarkTheme,
  LightTheme,
} from '../../utils/designTokens';
import { themeToggleAction } from '../../store/appActions.actions';

import type { UseControllerType } from './ThemeToggle.types';

export const useController: UseControllerType = () => {
  const [isDay, setIsDay] = useState<boolean>(true);

  const [, dispatch] = useAppContext();

  useEffect(() => {
    if (isDay) {
      dispatch(themeToggleAction(LightTheme));
    } else {
      dispatch(themeToggleAction(DarkTheme));
    }

    return () => dispatch(themeToggleAction(LightTheme));
  }, [dispatch, isDay]);

  const handleClick = () => {
    setIsDay((prevState) => !prevState);
  };

  return {
    handleClick,
    isDay,
  };
};
