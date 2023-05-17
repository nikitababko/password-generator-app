import React from 'react';

import { getProjectName } from '../../../utils/getProjectName';

import {
  Container,
  CopyrightName,
  CopyrightWrapper,
  CopyrightYear,
  ProjectVersion,
} from './BottomSection.styles';
import { useController } from './BottomSection.controller';
import { projectVersion } from './BottomSection.data';

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

      <ProjectVersion>
        {`${getProjectName()} ${projectVersion}`}
      </ProjectVersion>
    </Container>
  );
};
