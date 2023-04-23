import React from 'react';

import { Container } from './Layout.styles';
import type { Props } from './Layout.types';

export const Layout: React.FC<Props> = ({ children }) => (
  <Container>{children}</Container>
);
