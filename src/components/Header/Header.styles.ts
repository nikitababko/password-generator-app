import styled, { css } from 'styled-components';

import {
  mediaContainer375,
  mediaContainer768,
} from '../../styles/mediaQueryContainers';
import { FontSize } from '../../utils/designTokens';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaContainer768(
    css`
      flex-direction: column;
      row-gap: 40px;
    `,
  )}
`;

export const LeftCol = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${FontSize.l};
`;

export const RightCol = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  column-gap: 34px;

  ${mediaContainer768(
    css`
      justify-content: space-between;
      column-gap: 0;
      width: 100%;
    `,
  )}

  ${mediaContainer375(
    css`
      flex-direction: column;
      row-gap: 34px;
    `,
  )}
`;
