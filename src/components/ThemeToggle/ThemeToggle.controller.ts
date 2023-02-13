import { useState } from 'react';

import { UseThemeToggleType } from './ThemeToggle.types';

export const useThemeToggle: UseThemeToggleType = () => {
  const [isDay, setIsDay] = useState<boolean>(true);

  const handleClick = () => {
    setIsDay((prevState) => !prevState);
  };

  return {
    handleClick,
    isDay,
  };
};
