import React from 'react';

import {
  Cloud,
  Container,
  Stars,
  ToggleItem,
} from './ThemeToggle.styles';
import { useThemeToggle } from './ThemeToggle.controller';

export const ThemeToggle: React.FC = () => {
  const { handleClick, isDay } = useThemeToggle();

  return (
    <Container onClick={handleClick} isDay={isDay}>
      <ToggleItem isDay={isDay} />

      <Cloud isDay={isDay} />

      <Stars isDay={isDay} />
    </Container>
  );
};
