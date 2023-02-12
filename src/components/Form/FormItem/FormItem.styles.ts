import styled from 'styled-components';

import { FontSize } from '../../../utils/designTokens';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LeftCol = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 21px;
  width: 100%;
  max-width: 645px;
  height: 48px;
  font-size: ${FontSize.sm};
  font-weight: 400;
  line-height: 25px;
  background-color: ${({ theme }) => {
    return theme.colors.formItemLeftColBackgroundColor;
  }};
  border-radius: 12px;
`;

export const Label = styled.p``;

export const ValueExample = styled.p``;
