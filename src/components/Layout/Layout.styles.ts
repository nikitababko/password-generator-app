import styled, { css } from 'styled-components';
import { mediaContainer1024 } from '../../styles/mediaQueryContainers';
import { ColorDesignTokens } from '../../utils/designTokens';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 36px 40px;
  background-color: ${({ theme }) => {
    return theme.backgroundColor;
  }};

  ${mediaContainer1024(
    css`
      background-color: ${ColorDesignTokens.White};
    `,
  )}
`;
