import styled from 'styled-components';
import { ColorDesignTokens } from '../../utils/designTokens';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
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
