import React from 'react';

import type { IconProps } from './Icon.types';
import { useController } from './Icon.controller';
import { Container } from './Icon.styles';

export const Icon: React.FC<IconProps> = ({
  name,
  color,
  width,
  height,
  styles,
  ...rest
}) => {
  const { getIcon } = useController();

  return (
    <Container
      width={width}
      height={height}
      styles={styles}
      {...rest}
    >
      {getIcon(name, color)}
    </Container>
  );
};
