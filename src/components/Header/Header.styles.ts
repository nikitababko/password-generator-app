import styled, { css } from 'styled-components';

import {
  mediaContainer374,
  mediaContainer767,
} from '../../styles/mediaQueryContainers';
import { FontSizes } from '../../utils/designTokens';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaContainer767(
    css`
      flex-direction: column;
      row-gap: 40px;
    `,
  )}
`;

export const LeftCol = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${FontSizes.L};
`;

export const RightCol = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  column-gap: 34px;

  ${mediaContainer767(
    css`
      justify-content: space-between;
      column-gap: 0;
      width: 100%;
    `,
  )}

  ${mediaContainer374(
    css`
      flex-direction: column;
      row-gap: 34px;
    `,
  )}
`;
