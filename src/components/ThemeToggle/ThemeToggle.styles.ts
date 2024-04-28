import styled, { css, keyframes } from 'styled-components';

import { getAnimation } from '../../utils';

import type { ThemeStylesType } from './ThemeToggle.types';
import { COLOR_DESIGN_TOKENS } from '../../constants';

const itemLeftToRightAnimation = keyframes`
  0% {
    transform: translate(5px, -50%);
    border: 3px solid ${COLOR_DESIGN_TOKENS.YELLOW};
    background-color: ${COLOR_DESIGN_TOKENS.YELLOW_CORN};
  }

  100% {
    border: 3px solid ${COLOR_DESIGN_TOKENS.GRAY_DARK};
    background-color: ${COLOR_DESIGN_TOKENS.WHITE};
    transform: translate(48px, -50%);
  }
`;

const itemRightToLeftAnimation = keyframes`
  0% {
    transform: translate(48px, -50%);
    border: 3px solid ${COLOR_DESIGN_TOKENS.GRAY_DARK};
    background-color: ${COLOR_DESIGN_TOKENS.WHITE};
  }

  100% {
    transform: translate(5px, -50%);
    border: 3px solid ${COLOR_DESIGN_TOKENS.YELLOW};
    background-color: ${COLOR_DESIGN_TOKENS.YELLOW_CORN};
  }
`;

export const Container = styled.div.attrs({
  role: 'switch',
})<ThemeStylesType>`
  position: relative;
  min-width: 100px;
  height: 48px;
  border-radius: 100px;
  border: ${({ isDay }) => {
    return `2px solid ${
      isDay
        ? COLOR_DESIGN_TOKENS.BLUE_DARK_TURQUOISE
        : COLOR_DESIGN_TOKENS.BLUE_DARK_SLATE
    }`;
  }};
  background-color: ${({ isDay }) => {
    return isDay
      ? COLOR_DESIGN_TOKENS.BLUE_TURQUOISE
      : COLOR_DESIGN_TOKENS.BLUE_SLATE;
  }};
  transition: background-color ${getAnimation()},
    border ${getAnimation()};
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
        : itemLeftToRightAnimation} ${getAnimation()} forwards
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
    background-color: ${COLOR_DESIGN_TOKENS.GRAY_DARK};
    opacity: ${({ isDay }) => {
      return isDay ? 0 : 1;
    }};
    transition: opacity ${getAnimation()};
  }

  &::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${COLOR_DESIGN_TOKENS.GRAY_DARK};
    opacity: ${({ isDay }) => {
      return isDay ? 0 : 1;
    }};
    transition: opacity ${getAnimation()};
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
    return isDay ? 1 : 0;
  }};
  transition: transform ${getAnimation()},
    opacity ${getAnimation()};
  background: ${COLOR_DESIGN_TOKENS.WHITE};
  height: 15px;
  width: 15px;
  box-shadow: ${COLOR_DESIGN_TOKENS.WHITE} 7px -6px 0 0,
    ${COLOR_DESIGN_TOKENS.WHITE} 15px -6px 0 -3px,
    ${COLOR_DESIGN_TOKENS.WHITE} 18px 0 0 -2px,
    ${COLOR_DESIGN_TOKENS.WHITE} 10px 1px 0 -2px;
`;

export const Stars = styled.div<ThemeStylesType>`
  border-radius: 50%;
  position: absolute;
  top: 50%;
  z-index: 1;
  opacity: ${({ isDay }) => {
    return isDay ? 0 : 1;
  }};
  transform: ${({ isDay }) => {
    return `translate(${isDay ? '68px' : '26px'}, -50%)`;
  }};
  transition: transform ${getAnimation()},
    opacity ${getAnimation()};
  background-color: ${COLOR_DESIGN_TOKENS.WHITE};
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
    background-color: ${COLOR_DESIGN_TOKENS.WHITE};
  }

  &::after {
    content: '';
    position: absolute;
    top: 14px;
    left: -6px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: ${COLOR_DESIGN_TOKENS.WHITE};
  }
`;
