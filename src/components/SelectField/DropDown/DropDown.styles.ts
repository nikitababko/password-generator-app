import styled from 'styled-components';

import { ColorDesignTokens } from '../../../utils/designTokens';
import { getAnimation } from '../../../utils/getAnimation';

import type { ContainerStylesProps } from './DropDown.types';

export const Container = styled.div<ContainerStylesProps>`
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 999;
  flex-direction: column;
  padding: ${({ isOpen }) => {
    return `${isOpen ? '12px' : '0'} 6px`;
  }};
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  overflow-y: scroll;
  background-color: ${({ theme }) => {
    return theme.selectBackgroundColor;
  }};
  border: ${({ isOpen }) => {
    return isOpen
      ? `1px solid ${ColorDesignTokens.BlueLightSky}`
      : 'none';
  }};
  border-radius: 12px;
  transition: padding ${getAnimation()},
    height ${getAnimation()};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: ${ColorDesignTokens.GrayDark};
  }
`;
