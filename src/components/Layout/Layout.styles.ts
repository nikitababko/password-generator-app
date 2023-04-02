import styled, { css } from 'styled-components';
import { mediaContainer480 } from '../../styles/mediaQueryContainers';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 36px 40px;
  background-color: ${({ theme }) => {
    return theme.backgroundColor;
  }};

  ${mediaContainer480(
    css`
      padding: 36px 20px;
    `,
  )}
`;
