import styled, { css } from 'styled-components';

import {
  ColorDesignTokens,
  FontSize,
} from '../../../utils/designTokens';
import {
  mediaContainer1024,
  mediaContainer768,
} from '../../../styles/mediaQueryContainers';

import {
  FormItemLabelStylesProps,
  FormItemLeftColStylesProps,
  FormItemValueExampleStylesProps,
} from './FormItem.types';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 28px;
  align-items: center;
  width: 100%;
`;

export const LeftCol = styled.div<FormItemLeftColStylesProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 21px;
  width: 100%;
  max-width: 645px;
  height: 48px;
  font-size: ${FontSize.sm};
  font-weight: 400;
  line-height: 25px;
  background-color: ${({ theme }) => {
    return theme.formItemLeftColBackgroundColor;
  }};
  border-radius: 12px;
  pointer-events: none;

  ${mediaContainer1024(
    css`
      background-color: ${ColorDesignTokens.White};
    `,
  )}

  ${({ isPasswordLengthRow }) => {
    return mediaContainer768(
      css`
        justify-content: flex-start;
        pointer-events: ${isPasswordLengthRow
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

export const Label = styled.p<FormItemLabelStylesProps>`
  ${({ valueExampleIsVisible }) => {
    return mediaContainer768(
      css`
        display: ${valueExampleIsVisible
          ? 'none'
          : 'block'};
      `,
    );
  }}
`;

export const ValueExample = styled.p<FormItemValueExampleStylesProps>`
  ${({ valueExampleIsVisible }) => {
    return mediaContainer768(
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
  border: 1px solid ${ColorDesignTokens.GrayDark};
  border-radius: 2px;
  background-color: ${ColorDesignTokens.White};
  line-height: 11px;
  color: ${ColorDesignTokens.GrayDark};
  pointer-events: none;

  ${mediaContainer768(
    css`
      display: block;
    `,
  )}
`;
