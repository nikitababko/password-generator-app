import React from 'react';

import { IconItem } from './Icon.data';
import { IconProps } from './Icon.types';

export const Icon: React.FC<IconProps> = ({
  name,
  width,
  height,
}) => {
  const Component = IconItem[name]();

  return (
    <svg
      width={width ?? '22'}
      height={height ?? '17'}
      viewBox={`0 0 ${width ?? '22'} ${height ?? '17'}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Component}
    </svg>
  );
};
