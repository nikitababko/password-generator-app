import styled, { css } from 'styled-components';
import { mediaContainer1023 } from '../../../styles/mediaQueryContainers';
import { COLOR_DESIGN_TOKENS } from '../../../constants';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 76px;
  text-align: center;
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;

  p,
  span,
  a {
    color: ${COLOR_DESIGN_TOKENS.BLACK};

    ${mediaContainer1023(
      css`
        color: ${COLOR_DESIGN_TOKENS.WHITE};
      `,
    )}
  }
`;
