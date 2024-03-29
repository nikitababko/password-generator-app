import React from 'react';

import { Header } from '../Header';
import { Form } from '../Form';

import { Container } from './Content.styles';

export const Content: React.FC = () => {
  return (
    <Container data-testid="ContentContainer">
      <Header />

      <Form />
    </Container>
  );
};
