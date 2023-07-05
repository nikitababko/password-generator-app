import styled from 'styled-components';

import {
  COLOR_DESIGN_TOKENS,
  FontSizes,
} from '../../../utils/designTokens';
import { getAnimation } from '../../../utils/getAnimation';

import type {
  ChildrenStylesProps,
  ContainerStylesType,
} from './Item.types';

export const Container = styled.div.attrs({
  role: 'option',
})<ContainerStylesType>`
  display: flex;
  column-gap: 8px;
  align-items: center;
  height: 48px;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${({ selectedItemEqualToItem }) => {
    return selectedItemEqualToItem
      ? COLOR_DESIGN_TOKENS.BLUE_LIGHT_SKY
      : 'transparent';
  }};

  ${({ isDropDownItem }) => {
    return (
      isDropDownItem &&
      `
        padding: 12px 14px;
        @media (hover: hover) {
                &:hover {
                  background-color: ${
                    COLOR_DESIGN_TOKENS.BLUE_LIGHT_SKY
                  };  
                }
        }
        transition: background-color ${getAnimation()};
      `
    );
  }};
`;

export const Label = styled.p`
  font-size: ${FontSizes.SM};
`;

export const Children = styled.div<ChildrenStylesProps>`
  margin-left: auto;
  opacity: ${({ selectedItemEqualToItem }) => {
    return selectedItemEqualToItem ? '1' : '0';
  }};
`;
