import styled from 'styled-components';

import {
  Animation,
  ColorDesignTokens,
} from '../../../../utils/designTokens';

import { FormItemSwitchPropsStylesContainer } from './FormItemSwitch.types';

export const Container = styled.div<FormItemSwitchPropsStylesContainer>`
  position: relative;
  width: 56px;
  height: 32px;
  background-color: ${({ isActive }) => {
    return isActive
      ? ColorDesignTokens.Blue
      : ColorDesignTokens.BlueLightSky;
  }};
  border-radius: 26px;
  cursor: pointer;
  transition: background-color ${Animation};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${({ isActive }) => (isActive ? '28px' : '4px')};
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-color: ${({ isActive }) => {
      return isActive
        ? ColorDesignTokens.White
        : ColorDesignTokens.GrayDim;
    }};
    border-radius: 50%;
    transition: left ${Animation},
      background-color ${Animation};
  }
`;
