import { useEffect, useState } from 'react';

import { useAppContext } from '../../store';
import {
  DarkTheme,
  LightTheme,
} from '../../utils/designTokens';
import { themeToggleAction } from '../../store/appActions.actions';

export const useController = () => {
  const [isDay, setIsDay] = useState(true);

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
    setIsDay((previousState) => !previousState);
  };

  return {
    handleClick,
    isDay,
  };
};
