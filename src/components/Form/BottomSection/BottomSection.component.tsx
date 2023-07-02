import React from 'react';

import { PROJECT_NAME } from '../../../constants';

import {
  Container,
  CopyrightName,
  CopyrightWrapper,
  CopyrightYear,
  ProjectName,
} from './BottomSection.styles';
import { useController } from './BottomSection.controller';

export const BottomSection: React.FC = () => {
  const { copyright } = useController();

  return (
    <Container>
      <CopyrightWrapper>
        <CopyrightYear data-testid="CopyrightYear">
          {copyright.year}
        </CopyrightYear>

        <CopyrightName>{copyright.name}</CopyrightName>
      </CopyrightWrapper>

      <ProjectName>{PROJECT_NAME}</ProjectName>
    </Container>
  );
};
