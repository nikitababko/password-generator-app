import React from 'react';

import { Title } from '../Title';
import { SelectField } from '../SelectField';
import { ThemeToggle } from '../ThemeToggle';
import { useAppContext } from '../../store';

import { Container } from './Header.styles';
import { data } from './Header.data';
import { LanguagesType } from '../../hooks/useTranslate/useTranslate.types';

export const Header: React.FC = () => {
  const {
    lang: [, setLang],
  } = useAppContext();

  return (
    <Container>
      <Title />
      <ThemeToggle />
      <SelectField
        data={data}
        callback={(id) => setLang(id as LanguagesType)}
      />
    </Container>
  );
};
