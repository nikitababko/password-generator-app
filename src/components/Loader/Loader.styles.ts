import styled, { keyframes } from 'styled-components';
import { COLOR_DESIGN_TOKENS } from '../../utils/designTokens';

export const Container = styled.div.attrs({
  role: 'progressbar',
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const rotateAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const Content = styled.div`
  display: grid;
  width: 56px;
  height: 56px;
  border: 4px solid ${COLOR_DESIGN_TOKENS.WHITE};
  border-radius: 50%;
  border-right-color: ${COLOR_DESIGN_TOKENS.BLUE};
  animation: ${rotateAnimation} 1s infinite linear;

  &::before,
  &::after {
    content: '';
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
    animation: ${rotateAnimation} 2s infinite;
  }

  &::after {
    margin: 8px;
    animation-duration: 3s;
  }
`;
