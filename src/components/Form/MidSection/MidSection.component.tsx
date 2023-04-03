import React from 'react';

import { Icon } from '../../Icon';
import { ColorDesignTokens } from '../../../utils/designTokens';

import {
  Container,
  CopyButton,
  GenerateButton,
  GenerateButtonLabel,
  PasswordLabel,
  PasswordWrapper,
} from './MidSection.styles';
import { useMidSectionController } from './MidSection.controller';

export const MidSection: React.FC = () => {
  const {
    handleGeneratePassword,
    password,
    handleCopy,
    isCopied,
    generateButtonTranslation,
  } = useMidSectionController();

  return (
    <Container>
      <GenerateButton onClick={handleGeneratePassword}>
        <GenerateButtonLabel>
          {generateButtonTranslation}
        </GenerateButtonLabel>

        <Icon name="ArrowRepeat" width={31} height={32} />
      </GenerateButton>

      <PasswordWrapper>
        <PasswordLabel>{password[0]}</PasswordLabel>
      </PasswordWrapper>

      <CopyButton onClick={handleCopy} isCopied={isCopied}>
        <Icon name="CopySelect" width={31} height={32} />

        <Icon
          name="CheckMark"
          width={15}
          height={16}
          color={ColorDesignTokens.White}
        />
      </CopyButton>
    </Container>
  );
};
