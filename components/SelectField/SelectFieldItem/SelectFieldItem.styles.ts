import styled from 'styled-components';

import {
  Animation,
  ColorDesignTokens,
  FontSize,
} from '../../../utils/designTokens';

import { SelectFieldItemContainerStylesType } from './SelectFieldItem.types';

export const Container = styled.div<SelectFieldItemContainerStylesType>`
  display: flex;
  column-gap: 8px;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${({ selectedItemEqualToItem }) => {
    return selectedItemEqualToItem
      ? ColorDesignTokens.BlueLightSky
      : 'transparent';
  }};
  ${({ isDropDownItem }) => {
    return (
      isDropDownItem &&
      `
        padding: 12px 14px;
        &:hover {
          background-color: ${ColorDesignTokens.BlueLightSky};  
        }
        transition: background-color ${Animation};
      `
    );
  }};
`;

export const Label = styled.p`
  font-size: ${FontSize.sm};
`;

export const Children = styled.div`
  margin-left: auto;
`;
