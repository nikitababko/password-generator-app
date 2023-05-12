import React from 'react';

import { getProjectName } from '../../../utils/getProjectName';

import {
  Container,
  Copyright,
  ProjectVersion,
} from './BottomSection.styles';
import { useController } from './BottomSection.controller';
import { projectVersion } from './BottomSection.data';

export const BottomSection: React.FC = () => {
  const { copyright } = useController();

  return (
    <Container data-testid="BottomSectionContainer">
      <Copyright>{copyright}</Copyright>

      <ProjectVersion>
        {`${getProjectName()} ${projectVersion}`}
      </ProjectVersion>
    </Container>
  );
};
