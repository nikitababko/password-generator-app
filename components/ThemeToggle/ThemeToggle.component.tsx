import React, { useState } from 'react';

import {
  Cloud,
  Container,
  Stars,
  ToggleItem,
} from './ThemeToggle.styles';

export const ThemeToggle: React.FC = () => {
  const [isDay, setIsDay] = useState<boolean>(true);

  const handleClick = () =>
    setIsDay((prevState) => !prevState);

  return (
    <Container onClick={handleClick} isDay={isDay}>
      <ToggleItem isDay={isDay} />
      <Cloud isDay={isDay} />
      <Stars isDay={isDay} />
    </Container>
  );
};
