import styled from 'styled-components';

import {
  animation,
  ColorDesignTokens,
} from '../../utils/designTokens';

import type { SwitchContainerStylesProps } from './Switch.types';

export const Container = styled.div<SwitchContainerStylesProps>`
  position: relative;
  width: 56px;
  height: 32px;
  background-color: ${({ isActive, isDisabled }) => {
    return isActive
      ? `${
          isDisabled
            ? `${ColorDesignTokens.Blue}70`
            : ColorDesignTokens.Blue
        }`
      : ColorDesignTokens.BlueLightSky;
  }};
  border-radius: 26px;
  cursor: pointer;
  transition: background-color ${animation()};
  pointer-events: ${({ isDisabled }) => {
    return isDisabled ? 'none' : 'auto';
  }};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${({ isActive }) => (isActive ? '28px' : '4px')};
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-color: ${({ isActive }) => {
      return isActive
        ? ColorDesignTokens.White
        : ColorDesignTokens.GrayDim;
    }};
    border-radius: 50%;
    transition: left ${animation()},
      background-color ${animation()};
  }
`;
