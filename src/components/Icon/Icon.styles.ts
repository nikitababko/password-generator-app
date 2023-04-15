import styled from 'styled-components';

import type {
  IconContainerAttrsType,
  IconContainerStylesType,
} from './Icon.types';
import { defaultSize } from './Icon.data';

export const Container = styled.svg.attrs<IconContainerAttrsType>(
  ({ width, height }) => ({
    viewBox: `0 0 ${width ?? defaultSize.width} ${
      height ?? defaultSize.height
    }`,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  }),
)<IconContainerStylesType>`
  text-decoration: none;
  ${({ width, height }) => `
      width: ${width ?? defaultSize.width}px;
      height: ${height ?? defaultSize.height}px;
  `}
`;
