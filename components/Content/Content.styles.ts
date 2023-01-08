import styled from 'styled-components';

import { MediaBreakPointsDesignTokens } from '../../utils/designTokens';

export const Container = styled.div`
  align-self: center;
  width: 100%;
  max-width: ${MediaBreakPointsDesignTokens.media1920}px;
`;
