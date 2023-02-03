import React, { useState } from 'react';

import { Container } from './Switch.styles';
import { SwitchProps } from './Switch.types';

export const Switch: React.FC<SwitchProps> = ({
  id,
  callback,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
    callback(id);
  };

  return (
    <Container onClick={handleClick} isActive={isActive} />
  );
};
