import styled from 'styled-components';

import { ChevronWrapperStylesType } from './SelectField.types';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 196px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 14px;
  background-color: ${({ theme }) => {
    return theme.colors.inputBackgroundColor;
  }};
  border-radius: 12px;
  border: ${({ theme }) => {
    return `2px solid ${theme.colors.inputBorderColor}`;
  }};
  cursor: pointer;
`;

export const ChevronWrapper = styled.div<ChevronWrapperStylesType>`
  transform: ${({ isOpen }) => {
    return `rotate(${isOpen ? '180deg' : '0'}) `;
  }};
  transition: ${({ theme }) => theme.transition()};
`;
