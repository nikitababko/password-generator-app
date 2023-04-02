import React from 'react';

import { Title } from '../Title';
import { SelectField } from '../SelectField';
import { ThemeToggle } from '../ThemeToggle';
import { useAppContext } from '../../store';
import { LanguagesType } from '../../hooks/useTranslate/useTranslate.types';

import {
  Container,
  LeftCol,
  RightCol,
} from './Header.styles';
import { data } from './Header.data';

export const Header: React.FC = () => {
  const {
    lang: [, setLang],
  } = useAppContext();

  return (
    <Container>
      <LeftCol>
        <Title />
      </LeftCol>
      <RightCol>
        <ThemeToggle />
        <SelectField
          data={data}
          callback={(id) => setLang(id as LanguagesType)}
        />
      </RightCol>
    </Container>
  );
};
