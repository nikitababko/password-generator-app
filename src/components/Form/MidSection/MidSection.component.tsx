import React from 'react';

import { css } from 'styled-components';
import { Icon } from '../../Icon';

import {
  Container,
  CopyButton,
  CopyButtonInner,
  GenerateButton,
  GenerateButtonLabel,
  getArrowAnimation,
  PasswordLabel,
  PasswordWrapper,
} from './MidSection.styles';
import { useController } from './MidSection.controller';
import { COLOR_DESIGN_TOKENS } from '../../../constants';

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
          styles={css`
            ${getArrowAnimation(isGenerated)}
          `}
        />
      </GenerateButton>

      <PasswordWrapper>
        <PasswordLabel>{password[0]}</PasswordLabel>
      </PasswordWrapper>

      <CopyButton onClick={handleCopy} isCopied={isCopied}>
        <CopyButtonInner isCopied={isCopied}>
          <Icon
            name="CopySelect"
            width={31}
            height={32}
            color={COLOR_DESIGN_TOKENS.WHITE}
          />

          <Icon
            name="CheckMark"
            width={24}
            height={24}
            color={COLOR_DESIGN_TOKENS.WHITE}
          />
        </CopyButtonInner>
      </CopyButton>
    </Container>
  );
};
