import React from 'react';

import { Title } from '../Title';
import { SelectField } from '../SelectField';

import { Container } from './Header.styles';
import { data } from './Header.data';

export const Header: React.FC = () => {
  return (
    <Container>
      <Title />
      <SelectField data={data} />
    </Container>
  );
};
