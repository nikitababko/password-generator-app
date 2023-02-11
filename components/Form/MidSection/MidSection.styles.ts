import styled from 'styled-components';

import {
  animation,
  ColorDesignTokens,
  FontSize,
} from '../../../utils/designTokens';

import { CopyButtonStylesProps } from './MidSection.types';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GenerateButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  width: 240px;
  height: 56px;
  border-radius: 12px;
  background-color: ${({ theme }) => {
    return theme.colors.generateButtonBackgroundColor;
  }};
  cursor: pointer;
  transition: box-shadow ${animation()};
  border: none;

  &:hover {
    box-shadow: 0 0 16px 1px ${ColorDesignTokens.Black};
  }
`;

export const GenerateButtonLabel = styled.p`
  font-size: ${FontSize.sm};
  line-height: 26px;
  font-weight: 400;
  color: ${ColorDesignTokens.White};
`;

export const PasswordWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 34px;
  width: 360px;
  height: 56px;
  background-color: ${({ theme }) => {
    return theme.colors.formItemLeftColBackgroundColor;
  }};
  border-radius: 12px;
`;

export const PasswordLabel = styled.p`
  text-align: center;
  width: 100%;
  background-color: ${({ theme }) => {
    return theme.colors.formItemLeftColBackgroundColor;
  }};
  font-size: ${FontSize.sm};
  line-height: 26px;
  border-radius: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: ${ColorDesignTokens.GrayDark};
  }
`;

export const CopyButton = styled.button<CopyButtonStylesProps>`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: ${ColorDesignTokens.Blue};
  cursor: pointer;
  transition: box-shadow ${animation()};
  border: none;

  &:hover {
    box-shadow: 0 0 16px 1px ${ColorDesignTokens.Blue};
  }
`;
