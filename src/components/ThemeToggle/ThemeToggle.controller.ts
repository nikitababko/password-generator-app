import { useEffect, useState } from 'react';

import { UseThemeToggleType } from './ThemeToggle.types';
import { useAppContext } from '../../store';
import {
  DarkTheme,
  LightTheme,
} from '../../utils/designTokens';

export const useThemeToggle: UseThemeToggleType = () => {
  const [isDay, setIsDay] = useState<boolean>(true);

  const {
    theme: [, setTheme],
  } = useAppContext();

  useEffect(() => {
    if (isDay) {
      setTheme(LightTheme);
    } else {
      setTheme(DarkTheme);
    }

    return () => setTheme(LightTheme);
  }, [setTheme, isDay]);

  const handleClick = () => {
    setIsDay((prevState) => !prevState);
  };

  return {
    handleClick,
    isDay,
  };
};
