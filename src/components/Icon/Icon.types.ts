import type React from 'react';
import type { ValueOf } from 'next/constants';
import type { COLOR_DESIGN_TOKENS } from '../../constants';

export type ColorType = ValueOf<typeof COLOR_DESIGN_TOKENS>;

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
  styles?: React.CSSProperties;
};

export type IconContainerStylesType = Pick<
  IconProps,
  'width' | 'height' | 'styles'
>;

export type IconContainerAttributesType = Omit<
  IconContainerStylesType,
  'styles'
>;
