import React from 'react';

import { IconItems } from './Icon.data';
import { IconProps } from './Icon.types';
import { Container } from './Icon.styles';

export const Icon: React.FC<IconProps> = ({
  name,
  width,
  height,
  style,
}) => {
  const Component = IconItems[name]();

  return (
    <Container style={style} width={width} height={height}>
      {Component}
    </Container>
  );
};
