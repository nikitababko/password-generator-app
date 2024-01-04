import { useCallback } from 'react';
import { IconItems } from './Icon.data';
import type {
  GetIconType,
  UseControllerType,
} from './Icon.types';

export const useController: UseControllerType = () => {
  const getIcon: GetIconType = useCallback(
    (name, color) => {
      return IconItems[name](color);
    },
    [],
  );

  return {
    getIcon,
  };
};
