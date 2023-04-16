import React from 'react';

import { getProjectName } from '../../../utils/getProjectName';

import {
  Container,
  Copyright,
  ProjectVersion,
} from './BottomSection.styles';
import { useBottomSectionController } from './BottomSection.controller';
import { projectVersion } from './BottomSection.data';

export const BottomSection: React.FC = () => {
  const { getCopyright } = useBottomSectionController();

  return (
    <Container>
      <Copyright>{getCopyright}</Copyright>

      <ProjectVersion>
        {getProjectName()}

        {projectVersion}
      </ProjectVersion>
    </Container>
  );
};
