import { useEffect, useState } from 'react';

import { useThemeStore } from '../../store';
import { DarkTheme, LightTheme } from '../../utils';

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
