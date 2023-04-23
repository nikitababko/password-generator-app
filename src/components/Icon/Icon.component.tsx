import React from 'react';

import type { IconProps } from './Icon.types';
import { Container } from './Icon.styles';
import { useController } from './Icon.controller';

export const Icon: React.FC<IconProps> = ({
  name,
  color,
  width,
  height,
  styles,
}) => {
  const { getIcon } = useController();

  return (
    <Container
      styles={styles}
      width={width}
      height={height}
    >
      {getIcon(name, color)}
    </Container>
  );
};
