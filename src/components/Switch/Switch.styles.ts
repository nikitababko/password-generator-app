import styled from 'styled-components';

import { COLOR_DESIGN_TOKENS } from '../../utils/designTokens';
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
            ? `${COLOR_DESIGN_TOKENS.BLUE}70`
            : COLOR_DESIGN_TOKENS.BLUE
        }`
      : COLOR_DESIGN_TOKENS.BLUE_LIGHT_SKY;
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
        ? COLOR_DESIGN_TOKENS.WHITE
        : COLOR_DESIGN_TOKENS.GRAY_DIM;
    }};
    border-radius: 50%;
    transition: transform ${getAnimation()},
      background-color ${getAnimation()};
  }
`;
