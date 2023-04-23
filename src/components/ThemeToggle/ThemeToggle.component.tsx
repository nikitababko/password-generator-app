import React from 'react';

import {
  Cloud,
  Container,
  Stars,
  ToggleItem,
} from './ThemeToggle.styles';
import { useController } from './ThemeToggle.controller';

export const ThemeToggle: React.FC = () => {
  const { handleClick, isDay } = useController();

  return (
    <Container onClick={handleClick} isDay={isDay}>
      <ToggleItem isDay={isDay} />

      <Cloud isDay={isDay} />

      <Stars isDay={isDay} />
    </Container>
  );
};
