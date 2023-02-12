import styled from 'styled-components';

import { MediaBreakPointsDesignTokens } from '../../utils/designTokens';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: ${MediaBreakPointsDesignTokens.media1920}px;
`;
