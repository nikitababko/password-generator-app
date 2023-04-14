import styled, { css, keyframes } from 'styled-components';

import type {
  ThemeStylesType,
  ThemeToggleOpacityStateType,
} from './ThemeToggle.types';
import { ColorDesignTokens } from '../../utils/designTokens';
import { animation } from '../../utils/animation';

const ThemeToggleOpacityState: ThemeToggleOpacityStateType =
  {
    Zero: 0,
    One: 1,
  } as const;

const itemLeftToRightAnimation = keyframes`
  0% {
    transform: translate(5px, -50%);
    border: 3px solid ${ColorDesignTokens.Yellow};
    background-color: ${ColorDesignTokens.YellowCorn};
  }

  100% {
    border: 3px solid ${ColorDesignTokens.GrayDark};
    background-color: ${ColorDesignTokens.White};
    transform: translate(48px, -50%);
  }
`;

const itemRightToLeftAnimation = keyframes`
  0% {
    transform: translate(48px, -50%);
    border: 3px solid ${ColorDesignTokens.GrayDark};
    background-color: ${ColorDesignTokens.White};
  }

  100% {
    transform: translate(5px, -50%);
    border: 3px solid ${ColorDesignTokens.Yellow};
    background-color: ${ColorDesignTokens.YellowCorn};
  }
`;

export const Container = styled.div<ThemeStylesType>`
  position: relative;
  min-width: 100px;
  height: 48px;
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
  transition: background-color ${animation()},
    border ${animation()};
  cursor: pointer;
`;

export const ToggleItem = styled.div<ThemeStylesType>`
  position: absolute;
  top: 50%;
  z-index: 2;
  transform: translate(5px, -50%);
  animation: ${({ isDay }) => {
    return css`
      ${isDay
        ? itemRightToLeftAnimation
        : itemLeftToRightAnimation} ${animation()} forwards
    `;
  }};
  width: 40px;
  height: 40px;
  border-radius: 50%;

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
    transition: opacity ${animation()};
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
    transition: opacity ${animation()};
  }
`;

export const Cloud = styled.div<ThemeStylesType>`
  border-radius: 50%;
  position: absolute;
  top: 42%;
  transform: translateX(
    ${({ isDay }) => (isDay ? '54px' : '16px')}
  );
  opacity: ${({ isDay }) => {
    return isDay
      ? ThemeToggleOpacityState.One
      : ThemeToggleOpacityState.Zero;
  }};
  transition: transform ${animation()},
    opacity ${animation()};
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
  opacity: ${({ isDay }) => {
    return isDay
      ? ThemeToggleOpacityState.Zero
      : ThemeToggleOpacityState.One;
  }};
  transform: ${({ isDay }) => {
    return `translate(${isDay ? '68px' : '26px'}, -50%)`;
  }};
  transition: transform ${animation()},
    opacity ${animation()};
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
