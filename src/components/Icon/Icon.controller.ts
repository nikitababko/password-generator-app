import { IconItems } from './Icon.data';
import type {
  UseControllerType,
  GetIconType,
} from './Icon.types';

export const useController: UseControllerType = () => {
  const getIcon: GetIconType = (name, color) =>
    IconItems[name](color);

  return {
    getIcon,
  };
};
