import styled, { css } from 'styled-components';

import { mediaContainer1023 } from '../../styles/mediaQueryContainers';
import { COLOR_DESIGN_TOKENS } from '../../constants';

export const Container = styled.div.attrs({
  role: 'form',
})`
  align-self: center;
  padding: 40px 124px;
  width: 100%;
  background-color: ${({ theme }) => {
    return theme.foregroundColor;
  }};
  border-radius: 12px;
  box-shadow: 0 15px 37px -3px ${COLOR_DESIGN_TOKENS.BLACK}45;

  ${mediaContainer1023(
    css`
      box-shadow: none;
      background-color: transparent;
      padding: 40px 0;
      max-width: 648px;
    `,
  )}
`;

export const Border = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => {
    return theme.borderColor;
  }};
`;
