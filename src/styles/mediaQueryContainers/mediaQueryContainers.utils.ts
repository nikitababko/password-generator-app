import { css } from 'styled-components';

import { MediaBreakPointsDesignTokens } from '../../utils/designTokens';

import type { MediaQueryContainerType } from './mediaQueryContainers.types';

export const mediaContainer1200: MediaQueryContainerType = (
  styles,
) => css`
  @media (max-width: ${MediaBreakPointsDesignTokens.media1200}px) {
    ${styles};
  }
`;

export const mediaContainer1024: MediaQueryContainerType = (
  styles,
) => css`
  @media (max-width: ${MediaBreakPointsDesignTokens.media1024}px) {
    ${styles};
  }
`;

export const mediaContainer768: MediaQueryContainerType = (
  styles,
) => css`
  @media (max-width: ${MediaBreakPointsDesignTokens.media768}px) {
    ${styles};
  }
`;

export const mediaContainer480: MediaQueryContainerType = (
  inner,
) => css`
  @media (max-width: ${MediaBreakPointsDesignTokens.media480}px) {
    ${inner};
  }
`;

export const mediaContainer375: MediaQueryContainerType = (
  inner,
) => css`
  @media (max-width: ${MediaBreakPointsDesignTokens.media375}px) {
    ${inner};
  }
`;
