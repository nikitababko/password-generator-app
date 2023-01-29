import styled from 'styled-components';

import { ChevronWrapperStylesType } from './SelectField.types';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 196px;
  height: 55px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => {
    return theme.colors.selectBackgroundColor;
  }};
  border-radius: 12px;
  cursor: pointer;
`;

export const ChevronWrapper = styled.div<ChevronWrapperStylesType>`
  transform: ${({ isOpen }) => {
    return `rotate(${isOpen ? '180deg' : '0'})`;
  }};
  transition: ${({ theme }) => {
    return `transform ${theme.animation}`;
  }};
`;
