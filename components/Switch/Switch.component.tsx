import React, { useState } from 'react';

import { Container } from './Switch.styles';

export const Switch: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Container
      onClick={() => setIsActive((prevState) => !prevState)}
      isActive={isActive}
    />
  );
};
