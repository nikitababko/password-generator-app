import { css } from 'styled-components';

import type { MediaQueryContainerType } from './mediaQueryContainers.types';
import { MEDIA_BREAK_POINTS_DESIGN_TOKENS } from '../../utils';

export const mediaContainer1023: MediaQueryContainerType = (
  styles,
) => css`
  @media (max-width: ${MEDIA_BREAK_POINTS_DESIGN_TOKENS.MEDIA_1023}px) {
    ${styles};
  }
`;

export const mediaContainer767: MediaQueryContainerType = (
  styles,
) => css`
  @media (max-width: ${MEDIA_BREAK_POINTS_DESIGN_TOKENS.MEDIA_767}px) {
    ${styles};
  }
`;

export const mediaContainer479: MediaQueryContainerType = (
  inner,
) => css`
  @media (max-width: ${MEDIA_BREAK_POINTS_DESIGN_TOKENS.MEDIA_479}px) {
    ${inner};
  }
`;

export const mediaContainer374: MediaQueryContainerType = (
  inner,
) => css`
  @media (max-width: ${MEDIA_BREAK_POINTS_DESIGN_TOKENS.MEDIA_374}px) {
    ${inner};
  }
`;
