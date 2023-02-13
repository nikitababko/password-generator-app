import styled from 'styled-components';

import {
  ChevronWrapperProps,
  ContainerStylesProps,
} from './SelectField.types';
import { animation } from '../../utils/designTokens';

export const Container = styled.div<ContainerStylesProps>`
  position: relative;
  width: 100%;
  max-width: ${({ styles }) => styles?.maxWidth ?? '196px'};
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
    return theme.selectBackgroundColor;
  }};
  border-radius: 12px;
  cursor: pointer;
`;

export const ChevronWrapper = styled.div<ChevronWrapperProps>`
  transform: ${({ isOpen }) => {
    return `rotate(${isOpen ? '180deg' : '0'})`;
  }};
  transition: transform ${animation()};
`;
