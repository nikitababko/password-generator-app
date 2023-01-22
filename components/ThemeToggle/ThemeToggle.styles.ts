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

const sunLeftToRightAnimation = keyframes`
  0% {
    left: 5px;
  }

  100% {
    border: 3px solid ${ColorDesignTokens.GrayDark};
    background-color: ${ColorDesignTokens.White};
    left: 48px;
  }
`;

const sunRightToLeftAnimation = keyframes`
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
    return `2px solid ${isDay ? '#72cce3' : '#5d6baa'}`;
  }};
  background-color: ${({ isDay }) => {
    return isDay ? '#96dcee' : '#808fc7';
  }};
  transition: ${({ theme }) => {
    return `${theme.transition(
      'background-color',
    )}, ${theme.transition('border')}`;
  }};
  cursor: pointer;
`;

export const ToggleItem = styled.div<ThemeStylesType>`
  position: absolute;
  top: 50%;
  left: 5px;
  z-index: 2;
  animation: ${({ isDay }) => {
    return css`
      ${isDay
        ? sunRightToLeftAnimation
        : sunLeftToRightAnimation} 0.3s ease-in-out forwards
    `;
  }};
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: ${({ theme }) => {
    return `3px solid ${theme.colors.themeCircleBorderColor}`;
  }};
  background-color: ${({ theme }) => {
    return theme.colors.themeSwitchBackgroundColor;
  }};

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
      return theme.transition('opacity');
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
      return theme.transition('opacity');
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
    return `${theme.transition(
      'right',
    )}, ${theme.transition('opacity')}`;
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
    return `${theme.transition('left')}, ${theme.transition(
      'opacity',
    )}`;
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
