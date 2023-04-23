import type { UseControllerType } from './Item.types';

export const useController: UseControllerType = (
  item,
  setSelectedItem,
  setIsOpen,
  callback,
) => {
  const handleClick = () => {
    setSelectedItem?.(item);
    setIsOpen?.(false);
    callback?.(item.id, item.label);
  };

  return {
    handleClick,
  };
};
