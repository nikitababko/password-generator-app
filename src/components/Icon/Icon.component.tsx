import React from 'react';

import { IconItems } from './Icon.data';
import type { IconProps } from './Icon.types';
import { Container } from './Icon.styles';

export const Icon: React.FC<IconProps> = ({
  name,
  color,
  width,
  height,
  styles,
}) => {
  const Component = IconItems[name](color);

  return (
    <Container
      styles={styles}
      width={width}
      height={height}
    >
      {Component}
    </Container>
  );
};
