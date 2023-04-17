import styled, { css } from 'styled-components';

import { mediaContainer479 } from '../../styles/mediaQueryContainers';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 36px 40px;
  background-color: ${({ theme }) => {
    return theme.backgroundColor;
  }};

  ${mediaContainer479(
    css`
      padding: 36px 20px;
    `,
  )}
`;
