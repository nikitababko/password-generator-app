import styled from 'styled-components';
import type { SelectFieldDropDownContainerStylesProps } from './SelectFieldDropDown.types';
import { ColorDesignTokens } from '../../../utils/designTokens';
import { animation } from '../../../utils/animation';

export const Container = styled.div<SelectFieldDropDownContainerStylesProps>`
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
  transition: padding ${animation()}, height ${animation()};

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
