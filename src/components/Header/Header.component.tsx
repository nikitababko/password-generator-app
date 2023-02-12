import React from 'react';

import { Title } from '../Title';
import { SelectField } from '../SelectField';

import { Container } from './Header.styles';
import { data } from './Header.data';
import { ThemeToggle } from '../ThemeToggle';

export const Header: React.FC = () => {
  return (
    <Container>
      <Title />
      <ThemeToggle />
      <SelectField data={data} />
    </Container>
  );
};
