import React from 'react';

import { Icon } from '../../Icon';
import { COLOR_DESIGN_TOKENS } from '../../../utils/designTokens';

import {
  Container,
  CopyButton,
  GenerateButton,
  GenerateButtonLabel,
  getArrowAnimation,
  PasswordLabel,
  PasswordWrapper,
} from './MidSection.styles';
import { useController } from './MidSection.controller';

export const MidSection: React.FC = () => {
  const {
    handleGeneratePassword,
    password,
    handleCopy,
    isCopied,
    t,
    isGenerated,
  } = useController();

  return (
    <Container data-testid="MidSectionContainer">
      <GenerateButton onClick={handleGeneratePassword}>
        <GenerateButtonLabel>
          {t.generate}
        </GenerateButtonLabel>

        <Icon
          name="ArrowRepeat"
          width={31}
          height={32}
          styles={getArrowAnimation(isGenerated)}
        />
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
          color={COLOR_DESIGN_TOKENS.WHITE}
        />
      </CopyButton>
    </Container>
  );
};
