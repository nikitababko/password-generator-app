import styled from 'styled-components';
import { COLOR_DESIGN_TOKENS } from '../../../constants';

export const Container = styled.footer`
  margin-top: 76px;
  text-align: center;
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
`;

export const CopyrightWrapper = styled.p`
  margin-bottom: 10px;
`;

export const CopyrightYear = styled.span``;

export const CopyrightName = styled(CopyrightYear).attrs({
  as: 'a',
  href: 'https://nikitababko.github.io',
  target: '_blank',
})`
  color: ${COLOR_DESIGN_TOKENS.BLACK};
`;

export const ProjectName = styled(CopyrightYear)``;
