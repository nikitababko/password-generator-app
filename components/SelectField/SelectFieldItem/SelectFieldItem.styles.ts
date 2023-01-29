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
      ? ColorDesignTokens.BlueLightSky
      : 'transparent';
  }};
  ${({ theme, isDropDownItem }) => {
    return (
      isDropDownItem &&
      `
        padding: 12px 14px;
        &:hover {
          background-color: ${ColorDesignTokens.BlueLightSky};  
        }
        transition: background-color ${theme.animation};
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
