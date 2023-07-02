import React from 'react';

import { SelectField } from '../SelectField';
import { ThemeToggle } from '../ThemeToggle';
import { useAppContext } from '../../store';
import { changeLangAction } from '../../store/appActions.actions';
import type { LanguagesType } from '../../hooks/useTranslate/useTranslate.types';
import { PROJECT_NAME } from '../../constants';

import {
  Container,
  LeftCol,
  RightCol,
  Title,
} from './Header.styles';
import { data } from './Header.data';

export const Header: React.FC = () => {
  const [, dispatch] = useAppContext();

  return (
    <Container>
      <LeftCol>
        <Title>{PROJECT_NAME}</Title>
      </LeftCol>

      <RightCol>
        <ThemeToggle />

        <SelectField
          data={data}
          callback={(id) =>
            dispatch(changeLangAction(id as LanguagesType))
          }
        />
      </RightCol>
    </Container>
  );
};
