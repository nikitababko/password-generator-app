import styled from 'styled-components';

import {
  ColorDesignTokens,
  FontSize,
} from '../../../utils/designTokens';
import { animation } from '../../../utils/animation';

import type {
  ChildrenStylesProps,
  ItemContainerStylesType,
} from './Item.types';

export const Container = styled.div<ItemContainerStylesType>`
  display: flex;
  column-gap: 8px;
  align-items: center;
  height: 48px;
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
          background-color: ${
            ColorDesignTokens.BlueLightSky
          };  
        }
        transition: background-color ${animation()};
      `
    );
  }};
`;

export const Label = styled.p`
  font-size: ${FontSize.sm};
`;

export const Children = styled.div<ChildrenStylesProps>`
  margin-left: auto;
  opacity: ${({ selectedItemEqualToItem }) => {
    return selectedItemEqualToItem ? '1' : '0';
  }};
`;
