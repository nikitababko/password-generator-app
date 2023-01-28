import styled from 'styled-components';
import { SelectFieldDropDownContainerStylesType } from './SelectFieldDropDown.types';
import { ColorDesignTokens } from '../../../utils/designTokens';

export const Container = styled.div<SelectFieldDropDownContainerStylesType>`
  position: absolute;
  top: 58px;
  left: 0;
  flex-direction: column;
  padding: ${({ isOpen }) => {
    return `${isOpen ? '12px' : '0'} 6px`;
  }};
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  transition: ${({ theme }) => {
    return `padding ${theme.animation}, height ${theme.animation}`;
  }};
  overflow-y: scroll;
  background-color: ${({ theme }) => {
    return theme.colors.inputBackgroundColor;
  }};
  border-radius: 12px;
  border: ${({ theme }) => {
    return `2px solid ${theme.colors.inputBorderColor}`;
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
