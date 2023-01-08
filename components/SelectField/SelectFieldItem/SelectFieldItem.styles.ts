import styled from 'styled-components';

import { SelectFieldItemContainerStylesType } from './SelectFieldItem.types';
import { ColorDesignTokens } from '../../../utils/designTokens';

export const Container = styled.div<SelectFieldItemContainerStylesType>`
  display: flex;
  column-gap: 8px;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${({ selectedItemEqualToItem }) => {
    return selectedItemEqualToItem
      ? ColorDesignTokens.BlueMedium
      : 'transparent';
  }};
  ${({ theme, isDropDownItem }) => {
    return (
      isDropDownItem &&
      `
        padding: 12px 14px;
        &:hover {
          background-color: ${
            ColorDesignTokens.BlueMedium
          };  
        }
        transition: ${theme.transition('background-color')};
      `
    );
  }};
`;

export const Label = styled.p`
  font-size: 22px;
`;

export const Children = styled.div`
  margin-left: auto;
`;
