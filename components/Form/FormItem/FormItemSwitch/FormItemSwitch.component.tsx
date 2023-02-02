import React, { useState } from 'react';
import { Container } from './FormItemSwitch.styles';

export const FormItemSwitch: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Container
      onClick={() => setIsActive((prevState) => !prevState)}
      isActive={isActive}
    />
  );
};
