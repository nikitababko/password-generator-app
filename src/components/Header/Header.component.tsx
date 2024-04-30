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
import { languages } from './Header.data';
import { useController } from './Header.controller';

export const Header: React.FC = () => {
  const { handleClick, defaultLanguage } = useController();

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
          options={languages}
          callback={handleClick}
          defaultOption={defaultLanguage}
        />
      </RightCol>
    </Container>
  );
};
