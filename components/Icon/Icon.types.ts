import React from 'react';

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
  () => React.ReactNode
>;

export type IconProps = {
  name: IconItemsKeyType;
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
