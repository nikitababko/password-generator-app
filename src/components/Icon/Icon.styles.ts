import styled from 'styled-components';

import type {
  IconContainerAttrsType,
  IconContainerStylesType,
} from './Icon.types';
import { DEFAULT_SIZE } from './Icon.data';

export const Container = styled.svg.attrs<IconContainerAttrsType>(
  ({ width, height }) => ({
    viewBox: `0 0 ${width ?? DEFAULT_SIZE.width} ${
      height ?? DEFAULT_SIZE.height
    }`,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    role: 'img',
  }),
)<IconContainerStylesType>`
  ${({ styles, width, height }) => {
    return {
      ...styles,
      width: `${width ?? DEFAULT_SIZE.width}px`,
      height: `${height ?? DEFAULT_SIZE.height}px`,
      textDecoration: 'none',
    };
  }};
`;
