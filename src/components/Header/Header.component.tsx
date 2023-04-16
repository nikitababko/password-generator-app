import React from 'react';

import { SelectField } from '../SelectField';
import { ThemeToggle } from '../ThemeToggle';
import { useAppContext } from '../../store';
import { changeLangAction } from '../../store/appActions.actions';
import type { LanguagesType } from '../../hooks/useTranslate/useTranslate.types';
import { getProjectName } from '../../utils/getProjectName';

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
        <Title>{getProjectName()}</Title>
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
