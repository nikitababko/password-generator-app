import styled, { css, keyframes } from 'styled-components';

import {
  ThemeStylesType,
  ThemeToggleOpacityStateType,
} from './ThemeToggle.types';
import { ColorDesignTokens } from '../../utils/designTokens';

const ThemeToggleOpacityState: ThemeToggleOpacityStateType =
  {
    Zero: 0,
    One: 1,
  } as const;

const itemLeftToRightAnimation = keyframes`
  0% {
    left: 5px;
  }

  100% {
    border: 3px solid ${ColorDesignTokens.GrayDark};
    background-color: ${ColorDesignTokens.White};
    left: 48px;
  }
`;

const itemRightToLeftAnimation = keyframes`
  0% {
    left: 48px;
  }

  100% {
    left: 5px;
  }
`;

export const Container = styled.div<ThemeStylesType>`
  position: relative;
  margin-left: auto;
  margin-right: 34px;
  width: 100%;
  max-width: 100px;
  height: 100%;
  border-radius: 100px;
  border: ${({ isDay }) => {
    return `2px solid ${
      isDay
        ? ColorDesignTokens.BlueDarkTurquoise
        : ColorDesignTokens.BlueDarkSlate
    }`;
  }};
  background-color: ${({ isDay }) => {
    return isDay
      ? ColorDesignTokens.BlueTurquoise
      : ColorDesignTokens.BlueSlate;
  }};
  transition: ${({ theme }) => {
    return `background-color ${theme.animation}, border ${theme.animation}`;
  }};
  cursor: pointer;
`;

export const ToggleItem = styled.div<ThemeStylesType>`
  position: absolute;
  top: 50%;
  left: 5px;
  z-index: 2;
  animation: ${({ theme, isDay }) => {
    return css`
      ${isDay
        ? itemRightToLeftAnimation
        : itemLeftToRightAnimation} ${theme.animation} forwards
    `;
  }};
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 3px solid ${ColorDesignTokens.Yellow};
  background-color: ${ColorDesignTokens.YellowCorn};

  &::before {
    content: '';
    position: absolute;
    top: 18px;
    left: 6px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${ColorDesignTokens.GrayDark};
    opacity: ${({ isDay }) => {
      return isDay
        ? ThemeToggleOpacityState.Zero
        : ThemeToggleOpacityState.One;
    }};
    transition: ${({ theme }) => {
      return `opacity ${theme.animation}`;
    }};
  }

  &::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${ColorDesignTokens.GrayDark};
    opacity: ${({ isDay }) => {
      return isDay
        ? ThemeToggleOpacityState.Zero
        : ThemeToggleOpacityState.One;
    }};
    transition: ${({ theme }) => {
      return `opacity ${theme.animation}`;
    }};
  }
`;

export const Cloud = styled.div<ThemeStylesType>`
  border-radius: 50%;
  position: absolute;
  top: 42%;
  right: ${({ isDay }) => (isDay ? '22px' : '40px')};
  opacity: ${({ isDay }) => {
    return isDay
      ? ThemeToggleOpacityState.One
      : ThemeToggleOpacityState.Zero;
  }};
  transition: ${({ theme }) => {
    return `right ${theme.animation}, opacity ${theme.animation}`;
  }};
  background: ${ColorDesignTokens.White};
  height: 15px;
  width: 15px;
  box-shadow: ${ColorDesignTokens.White} 7px -6px 0 0,
    ${ColorDesignTokens.White} 15px -6px 0 -3px,
    ${ColorDesignTokens.White} 18px 0 0 -2px,
    ${ColorDesignTokens.White} 10px 1px 0 -2px;
`;

export const Stars = styled.div<ThemeStylesType>`
  border-radius: 50%;
  position: absolute;
  top: 50%;
  z-index: 1;
  left: ${({ isDay }) => (isDay ? '40px' : '26px')};
  opacity: ${({ isDay }) => {
    return isDay
      ? ThemeToggleOpacityState.Zero
      : ThemeToggleOpacityState.One;
  }};
  transition: ${({ theme }) => {
    return `left ${theme.animation}, opacity ${theme.animation}`;
  }};
  transform: translateY(-50%);
  background-color: ${ColorDesignTokens.White};
  height: 7px;
  width: 7px;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${ColorDesignTokens.White};
  }

  &::after {
    content: '';
    position: absolute;
    top: 14px;
    left: -6px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: ${ColorDesignTokens.White};
  }
`;
