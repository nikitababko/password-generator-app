import { IconItems } from './Icon.data';
import type {
  GetIconType,
  UseControllerType,
} from './Icon.types';

export const useController: UseControllerType = () => {
  const getIcon: GetIconType = (name, color) => {
    return IconItems[name](color);
  };

  return {
    getIcon,
  };
};
