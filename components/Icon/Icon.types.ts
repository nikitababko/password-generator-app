import React from 'react';

import { ColorDesignTokensType } from '../../utils/designTokens/designTokens.types';
import { ValueOf } from '../../types/global.types';

export type ColorType = ValueOf<ColorDesignTokensType>;

export type DefaultSizeType = Record<
  'width' | 'height',
  number
>;

type IconItemsKeyType =
  | 'FlagUs'
  | 'FlagRu'
  | 'FlagPl'
  | 'FlagKr'
  | 'FlagJp'
  | 'FlagIt'
  | 'FlagIn'
  | 'FlagId'
  | 'FlagGe'
  | 'FlagFr'
  | 'FlagEs'
  | 'FlagDe'
  | 'FlagCh'
  | 'FlagAm'
  | 'FlagAe'
  | 'ChevronUp'
  | 'ChevronDown'
  | 'ArrowRepeat'
  | 'CopySelect'
  | 'CheckMark';

export type IconItemsType = Record<
  IconItemsKeyType,
  (color?: ColorType) => React.ReactNode
>;

export type IconProps = {
  name: IconItemsKeyType;
  color?: ColorType;
  width?: number;
  height?: number;
  style?: React.CSSProperties | undefined;
};

export type IconContainerStylesType = {
  width?: number;
  height?: number;
  style?: React.CSSProperties | undefined;
};

export type IconContainerAttrsType =
  IconContainerStylesType;
