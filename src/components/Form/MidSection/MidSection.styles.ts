import styled, { css, keyframes } from 'styled-components';

import {
  mediaContainer1023,
  mediaContainer767,
} from '../../../styles/mediaQueryContainers';
import { getAnimation } from '../../../utils';

import type { CopyButtonStylesProps } from './MidSection.types';
import {
  COLOR_DESIGN_TOKENS,
  FONT_SIZES,
} from '../../../constants';
import { ANIMATION_TIME } from './MidSection.data';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 24px;
`;

export const GenerateButton = styled.button.attrs({
  role: 'button',
  'data-testid': 'GenerateButton',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  width: 100%;
  max-width: 180px;
  height: 56px;
  border-radius: 12px;
  background-color: ${({ theme }) => {
    return theme.generateButtonBackgroundColor;
  }};
  cursor: pointer;
  transition: box-shadow ${getAnimation()};
  border: none;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 8px 1px ${COLOR_DESIGN_TOKENS.BLACK};
    }
  }

  ${mediaContainer767(
    css`
      max-width: 56px;
    `,
  )}
`;

export const GenerateButtonLabel = styled.p`
  font-size: ${FONT_SIZES.SM};
  line-height: 26px;
  font-weight: 400;
  color: ${COLOR_DESIGN_TOKENS.WHITE};

  ${mediaContainer767(
    css`
      display: none;
    `,
  )}
`;

export const PasswordWrapper = styled.div.attrs({
  'data-testid': 'PasswordWrapper',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 34px;
  width: 100%;
  max-width: 360px;
  height: 56px;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: ${({ theme }) => {
    return theme.formItemLeftColBackgroundColor;
  }};
  border-radius: 12px;

  ${mediaContainer1023(
    css`
      background-color: ${COLOR_DESIGN_TOKENS.WHITE};
    `,
  )}
`;

export const PasswordLabel = styled.p.attrs({
  'data-testid': 'MidSectionPasswordLabel',
})`
  text-align: center;
  width: 100%;
  background-color: transparent;
  font-size: ${FONT_SIZES.SM};
  line-height: 26px;
  border-radius: 12px;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: ${COLOR_DESIGN_TOKENS.GRAY_DARK};
  }
`;

const copyButtonInnerAnimation = keyframes`
  20% {
    transform: translateY(-26px);
  }

  50% {
    transform: translateY(-26px);
  }

  100% {
    transform: translateY(23px);
  }
`;

export const CopyButton = styled.button.attrs({
  'data-testid': 'CopyButton',
})<CopyButtonStylesProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: ${COLOR_DESIGN_TOKENS.BLUE};
  cursor: copy;
  transition: box-shadow ${getAnimation()};
  border: none;
  overflow: hidden;
  pointer-events: ${({ isCopied }) => {
    return isCopied ? 'none' : 'auto';
  }};

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 8px 1px ${COLOR_DESIGN_TOKENS.BLUE};
    }
  }
`;

export const getArrowAnimation = (isGenerated: boolean) => {
  return {
    transform: `rotate(${isGenerated ? '180deg' : 0})`,
    transition: `transform ${getAnimation()}`,
  };
};

export const CopyButtonInner = styled.div<CopyButtonStylesProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transform: translateY(23px);
  ${({ isCopied }) =>
    isCopied &&
    css`
      animation: ${copyButtonInnerAnimation}
        ${getAnimation(ANIMATION_TIME)};
    `}
`;
