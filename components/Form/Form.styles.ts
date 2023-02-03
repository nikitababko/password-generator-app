import styled from 'styled-components';

import {
  Animation,
  ColorDesignTokens,
  FontSize,
} from '../../utils/designTokens';

export const Container = styled.div`
  align-self: center;
  padding: 40px 124px;
  width: 988px;
  height: 882px;
  background-color: ${({ theme }) => {
    return theme.colors.foregroundColor;
  }};
  border-radius: 12px;
  box-shadow: 0 15px 37px -3px ${ColorDesignTokens.Black}45;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
`;

export const Border = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => {
    return theme.colors.borderColor;
  }};
`;

export const Mid = styled.div`
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
  transition: box-shadow ${Animation};
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
  height: 56px;
  background-color: ${({ theme }) => {
    return theme.colors.formItemLeftColBackgroundColor;
  }};
  border-radius: 12px;
`;

export const PasswordLabel = styled.p`
  background-color: ${({ theme }) => {
    return theme.colors.formItemLeftColBackgroundColor;
  }};
  font-size: ${FontSize.sm};
  line-height: 26px;
  border-radius: 12px;
`;

export const CopyButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: ${ColorDesignTokens.Blue};
  cursor: pointer;
  transition: box-shadow ${Animation};
  border: none;

  &:hover {
    box-shadow: 0 0 16px 1px ${ColorDesignTokens.Blue};
  }
`;
