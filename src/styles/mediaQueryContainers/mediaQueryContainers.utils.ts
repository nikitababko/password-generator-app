import { css } from 'styled-components';

import { MediaBreakPointsDesignTokens } from '../../utils/designTokens';

import type { MediaQueryContainerType } from './mediaQueryContainers.types';

export const mediaContainer1023: MediaQueryContainerType = (
  styles,
) => css`
  @media (max-width: ${MediaBreakPointsDesignTokens.media1023}px) {
    ${styles};
  }
`;

export const mediaContainer767: MediaQueryContainerType = (
  styles,
) => css`
  @media (max-width: ${MediaBreakPointsDesignTokens.media767}px) {
    ${styles};
  }
`;

export const mediaContainer479: MediaQueryContainerType = (
  inner,
) => css`
  @media (max-width: ${MediaBreakPointsDesignTokens.media479}px) {
    ${inner};
  }
`;

export const mediaContainer374: MediaQueryContainerType = (
  inner,
) => css`
  @media (max-width: ${MediaBreakPointsDesignTokens.media374}px) {
    ${inner};
  }
`;
