import styled from 'styled-components';

import { COLOR_DESIGN_TOKENS } from '../../utils/designTokens';
import { getAnimation } from '../../utils/getAnimation';

import type {
  ChevronWrapperProps,
  ContainerStylesProps,
} from './SelectField.types';

export const Container = styled.div.attrs({
  role: 'listbox',
})<ContainerStylesProps>`
  position: relative;
  height: 48px;
  min-width: ${({ styles }) => styles?.width ?? '196px'};
`;

export const Content = styled.div.attrs({
  'data-testid': 'SelectFieldContent',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 14px;
  padding: 0 16px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => {
    return theme.selectBackgroundColor;
  }};
  border: 1px solid ${COLOR_DESIGN_TOKENS.BLUE_LIGHT_SKY};
  border-radius: 12px;
  cursor: pointer;
`;

export const ChevronWrapper = styled.div<ChevronWrapperProps>`
  transform: ${({ isOpen }) => {
    return `rotate(${isOpen ? '180deg' : '0'})`;
  }};
  transition: transform ${getAnimation()};
`;
