import React from 'react';

import { IconItems } from './Icon.data';
import type { IconProps } from './Icon.types';
import { Container } from './Icon.styles';

export const Icon: React.FC<IconProps> = ({
  name,
  color,
  width,
  height,
  style,
}) => {
  const Component = IconItems[name](color);

  return (
    <Container
      style={style}
      width={width}
      height={height}
      color={color}
    >
      {Component}
    </Container>
  );
};
