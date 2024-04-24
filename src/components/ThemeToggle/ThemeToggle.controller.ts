import { useEffect, useState } from 'react';
import {
  DarkTheme,
  LightTheme,
} from '../../utils/designTokens';
import { useThemeStore } from '../../store';

export const useController = () => {
  const [isDay, setIsDay] = useState(true);
  const changeTheme = useThemeStore(
    (state) => state.changeTheme,
  );

  useEffect(() => {
    if (isDay) {
      changeTheme(LightTheme);
    } else {
      changeTheme(DarkTheme);
    }

    return () => changeTheme(LightTheme);
  }, [changeTheme, isDay]);

  const handleClick = () => {
    setIsDay((previousState) => !previousState);
  };

  return {
    handleClick,
    isDay,
  };
};
