import styled from 'styled-components';
import { SelectFieldDropDownContainerStylesType } from './SelectFieldDropDown.types';
import { ColorDesignTokens } from '../../../utils/designTokens';

export const Container = styled.div<SelectFieldDropDownContainerStylesType>`
  position: absolute;
  top: 58px;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding: 12px 6px;
  width: 100%;
  height: 300px;
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
    transition: ${({ theme }) => theme.transition('all')};
    border-radius: 12px;
    background: ${ColorDesignTokens.GrayDark};
  }
`;
