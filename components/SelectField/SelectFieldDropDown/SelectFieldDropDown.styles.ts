import styled from 'styled-components';
import { SelectFieldDropDownContainerStylesProps } from './SelectFieldDropDown.types';
import { ColorDesignTokens } from '../../../utils/designTokens';

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
    return theme.colors.selectBackgroundColor;
  }};
  border-radius: 12px;
  transition: ${({ theme }) => {
    return `padding ${theme.animation}, height ${theme.animation}`;
  }};

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
