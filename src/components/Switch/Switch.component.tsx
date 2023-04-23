import React from 'react';

import { Container } from './Switch.styles';
import type { Props } from './Switch.types';
import { useController } from './Switch.controller';

export const Switch: React.FC<Props> = ({
  id,
  callback,
  value,
  isDisabled,
}) => {
  const { isActive, handleClick } = useController(
    value,
    callback,
    id,
  );

  return (
    <Container
      onClick={handleClick}
      isActive={isActive}
      isDisabled={isDisabled}
    />
  );
};
