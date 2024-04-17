import { useCallback } from 'react';
import { IconItems } from './Icon.data';
import type { IconProps } from './Icon.types';

export const useController = () => {
  const getIcon = useCallback(
    (
      name: IconProps['name'],
      color: IconProps['color'],
    ) => {
      return IconItems[name](color);
    },
    [],
  );

  return {
    getIcon,
  };
};
