import styled, { css } from 'styled-components';

import {
  mediaContainer1023,
  mediaContainer767,
} from '../../../styles/mediaQueryContainers';

import type {
  ItemLabelStylesProps,
  ItemLeftColStylesProps,
  ItemValueExampleStylesProps,
} from './Item.types';
import {
  COLOR_DESIGN_TOKENS,
  FONT_SIZES,
} from '../../../constants';

export const Container = styled.div`
  display: flex;
  column-gap: 28px;
  align-items: center;
  width: 100%;
`;

export const LeftCol = styled.div.attrs({
  role: 'button',
})<ItemLeftColStylesProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 21px;
  width: 100%;
  max-width: 645px;
  min-width: 160px;
  height: 100%;
  font-size: ${FONT_SIZES.SM};
  font-weight: 400;
  line-height: 25px;
  background-color: ${({ theme }) => {
    return theme.formItemLeftColBackgroundColor;
  }};
  border-radius: 12px;
  pointer-events: none;

  ${mediaContainer1023(
    css`
      background-color: ${COLOR_DESIGN_TOKENS.WHITE};
    `,
  )}

  ${({ isFormItemPasswordLength }) => {
    return mediaContainer767(
      css`
        justify-content: flex-start;
        pointer-events: ${isFormItemPasswordLength
          ? 'none'
          : 'all'};
        padding-left: 36px;
      `,
    );
  }}
`;

export const RightCol = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 90px;
  justify-content: flex-end;
`;

export const Label = styled.p<ItemLabelStylesProps>`
  ${({ valueExampleIsVisible }) => {
    return mediaContainer767(
      css`
        display: ${valueExampleIsVisible
          ? 'none'
          : 'block'};
      `,
    );
  }}
`;

export const ValueExample = styled.p<ItemValueExampleStylesProps>`
  word-break: break-all;

  ${({ valueExampleIsVisible }) => {
    return mediaContainer767(
      css`
        display: ${valueExampleIsVisible
          ? 'block'
          : 'none'};
      `,
    );
  }}
`;

export const Info = styled.p`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  display: none;
  margin-right: 15px;
  padding: 6px 5px;
  border: 1px solid ${COLOR_DESIGN_TOKENS.GRAY_DARK};
  border-radius: 2px;
  background-color: ${COLOR_DESIGN_TOKENS.WHITE};
  line-height: 11px;
  color: ${COLOR_DESIGN_TOKENS.GRAY_DARK};
  pointer-events: none;

  ${mediaContainer767(
    css`
      display: block;
    `,
  )}
`;
