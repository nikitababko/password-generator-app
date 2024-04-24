import React from 'react';
import Image from 'next/image';

import { SelectField } from '../SelectField';
import { ThemeToggle } from '../ThemeToggle';
import { PROJECT_NAME } from '../../constants';

import {
  Container,
  LeftCol,
  RightCol,
  Title,
} from './Header.styles';
import { data } from './Header.data';
import { useLangStore } from '../../store';
import type { LanguagesType } from '../../hooks/useTranslate/useTranslate.types';

export const Header: React.FC = () => {
  const changeLang = useLangStore(
    (state) => state.changeLang,
  );

  return (
    <Container>
      <LeftCol>
        <Image
          src="/static/logo.svg"
          alt="Logo"
          width={69}
          height={77}
        />

        <Title>{PROJECT_NAME}</Title>
      </LeftCol>

      <RightCol>
        <ThemeToggle />

        <SelectField
          data={data}
          callback={(id) => changeLang(id as LanguagesType)}
        />
      </RightCol>
    </Container>
  );
};
