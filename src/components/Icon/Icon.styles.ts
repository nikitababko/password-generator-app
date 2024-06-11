import styled from 'styled-components';
import type { IconContainerStylesType } from './Icon.types';

export const Container = styled.div.attrs({
  role: 'img',
})<IconContainerStylesType>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  ${({ styles }) => styles}
  & > svg {
    width: 100%;
    height: 100%;
  }
`;
