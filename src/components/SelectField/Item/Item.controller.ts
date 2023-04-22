import type { UseItemControllerType } from './Item.types';

export const useItemController: UseItemControllerType = (
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
