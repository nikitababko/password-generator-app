import React from 'react';

import { Icon } from '../../Icon';

import {
  Container,
  CopyButton,
  GenerateButton,
  GenerateButtonLabel,
  PasswordLabel,
  PasswordWrapper,
} from './MidSection.styles';
import { useMidSectionController } from './MidSection.controller';
import { firstElement } from './MidSection.data';

export const MidSection: React.FC = () => {
  const { handleGeneratePassword, password } =
    useMidSectionController();

  return (
    <Container>
      <GenerateButton onClick={handleGeneratePassword}>
        <GenerateButtonLabel>Generate</GenerateButtonLabel>
        <Icon name="ArrowRepeat" width={31} height={32} />
      </GenerateButton>

      <PasswordWrapper>
        <PasswordLabel>
          {password[firstElement]}
        </PasswordLabel>
      </PasswordWrapper>

      <CopyButton>
        <Icon name="CopySelect" width={31} height={32} />
      </CopyButton>
    </Container>
  );
};
