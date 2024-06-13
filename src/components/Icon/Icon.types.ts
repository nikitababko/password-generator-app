import type React from 'react';
import type { ValueOf } from 'ts-essentials';
import type { FlattenSimpleInterpolation } from 'styled-components';
import type { COLOR_DESIGN_TOKENS } from '../../constants';

export type ColorType = ValueOf<typeof COLOR_DESIGN_TOKENS>;

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

export type IconProps =
  React.DOMAttributes<HTMLDivElement> & {
    name: IconItemsKeyType;
    color?: ColorType;
    width?: number;
    height?: number;
    styles?: FlattenSimpleInterpolation;
  };

export type IconContainerStylesType = Pick<
  IconProps,
  'width' | 'height' | 'styles'
>;
