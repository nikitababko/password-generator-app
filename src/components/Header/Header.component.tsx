import React from 'react';

import { Title } from '../Title';
import { SelectField } from '../SelectField';
import { ThemeToggle } from '../ThemeToggle';
import { useAppContext } from '../../store';

import {
  Container,
  LeftCol,
  RightCol,
} from './Header.styles';
import { data } from './Header.data';
import { changeLangAction } from '../../store/appActions.actions';
import { LanguagesType } from '../../hooks/useTranslate/useTranslate.types';

export const Header: React.FC = () => {
  const [, dispatch] = useAppContext();

  return (
    <Container>
      <LeftCol>
        <Title />
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
