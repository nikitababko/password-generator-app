import { useEffect, useState } from 'react';

import { useThemeStore } from '../../store';
import { DarkTheme, LightTheme } from '../../constants';

export const useController = () => {
  const [isDay, setIsDay] = useState(() => {
    const saveMySettings = JSON.parse(
      localStorage.getItem('saveMySettings') || 'false',
    );

    if (saveMySettings) {
      return JSON.parse(
        localStorage.getItem('isLightTheme') || 'true',
      );
    }

    return true;
  });

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
    // eslint-disable-next-line unicorn/no-keyword-prefix
    const newIsDay = !isDay;
    setIsDay(newIsDay);
    localStorage.setItem(
      'isLightTheme',
      JSON.stringify(newIsDay),
    );
  };

  return {
    handleClick,
    isDay,
  };
};
