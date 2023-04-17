import styled, { css, keyframes } from 'styled-components';

import {
  ColorDesignTokens,
  FontSize,
} from '../../../utils/designTokens';
import {
  mediaContainer1023,
  mediaContainer479,
  mediaContainer767,
} from '../../../styles/mediaQueryContainers';
import { animation } from '../../../utils/animation';

import type {
  CopyButtonStylesProps,
  GenerateButtonAnimationType,
} from './MidSection.types';
import { animationTime } from './MidSection.data';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 24px;

  ${mediaContainer479(
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-row-gap: 40px;
    `,
  )}
`;

export const GenerateButton = styled.button`
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
  transition: box-shadow ${animation()};
  border: none;

  &:hover {
    box-shadow: 0 0 8px 1px ${ColorDesignTokens.Black};
  }

  ${mediaContainer767(
    css`
      max-width: 56px;
    `,
  )}

  ${mediaContainer479(
    css`
      grid-column: 1;
    `,
  )}
`;

export const GenerateButtonLabel = styled.p`
  font-size: ${FontSize.sm};
  line-height: 26px;
  font-weight: 400;
  color: ${ColorDesignTokens.White};

  ${mediaContainer767(
    css`
      display: none;
    `,
  )}
`;

export const PasswordWrapper = styled.div`
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
      background-color: ${ColorDesignTokens.White};
    `,
  )}

  ${mediaContainer479(
    css`
      grid-column: 1 / -1;
      grid-row: 2;
      max-width: none;
    `,
  )}
`;

export const PasswordLabel = styled.p`
  text-align: center;
  width: 100%;
  background-color: transparent;
  font-size: ${FontSize.sm};
  line-height: 26px;
  border-radius: 12px;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: ${ColorDesignTokens.GrayDark};
  }
`;

const copyButtonFirstIconAnimation = keyframes`
  20% {
    top: -30%;
  }

  70% {
    top: -30%;
  }

  100% {
    top: 50%;
  }
`;

const copyButtonSecondIconAnimation = keyframes`
  20% {
    top: 50%;
  }

  70% {
    top: 50%;
  }

  100% {
    top: 116%;
  }
`;

export const CopyButton = styled.button<CopyButtonStylesProps>`
  position: relative;
  width: 100%;
  max-width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: ${ColorDesignTokens.Blue};
  cursor: pointer;
  transition: box-shadow ${animation()};
  border: none;
  overflow: hidden;
  pointer-events: ${({ isCopied }) => {
    return isCopied ? 'none' : 'auto';
  }};

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  svg:first-child {
    ${({ isCopied }) =>
      isCopied &&
      css`
        animation: ${copyButtonFirstIconAnimation}
          ${animation(animationTime)};
      `}
  }

  svg:last-child {
    top: 116%;
    ${({ isCopied }) =>
      isCopied &&
      css`
        animation: ${copyButtonSecondIconAnimation}
          ${animation(animationTime)};
      `}
  }

  &:hover {
    box-shadow: 0 0 8px 1px ${ColorDesignTokens.Blue};
  }

  ${mediaContainer479(
    css`
      grid-column: 2;
      justify-self: flex-end;
    `,
  )}
`;

export const GenerateButtonAnimation: GenerateButtonAnimationType =
  (isGenerated) => {
    return {
      transform: `rotate(${isGenerated ? '180deg' : 0})`,
      transition: `transform ${animation()}`,
    };
  };
