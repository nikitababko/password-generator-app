import React from 'react';

import { Title } from '../Title';

import { Container } from './Header.styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Title />
    </Container>
  );
};
