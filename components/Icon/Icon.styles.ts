import styled from 'styled-components';

import {
  IconContainerAttrsType,
  IconContainerStylesType,
} from './Icon.types';

export const Container = styled.svg.attrs<IconContainerAttrsType>(
  ({ style, width, height }) => ({
    style,
    viewBox: `0 0 ${width ?? '22'} ${height ?? '17'}`,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  }),
)<IconContainerStylesType>`
  text-decoration: none;
  ${({ width, height }) => `
      width: ${width ?? '23px'};
      height: ${height ?? '18px'};
  `}
`;
