import styled from 'styled-components';

import { ColorDesignTokens } from '../../utils/designTokens';
import { getAnimation } from '../../utils/getAnimation';

import type { SwitchContainerStylesProps } from './Switch.types';

export const Container = styled.div.attrs({
  role: 'switch',
})<SwitchContainerStylesProps>`
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
  transition: background-color ${getAnimation()};
  pointer-events: ${({ isDisabled }) => {
    return isDisabled ? 'none' : 'auto';
  }};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: ${({ isActive }) => {
      return `translate(${
        isActive ? '28px' : '4px'
      }, -50%)`;
    }};
    width: 24px;
    height: 24px;
    background-color: ${({ isActive }) => {
      return isActive
        ? ColorDesignTokens.White
        : ColorDesignTokens.GrayDim;
    }};
    border-radius: 50%;
    transition: transform ${getAnimation()},
      background-color ${getAnimation()};
  }
`;
