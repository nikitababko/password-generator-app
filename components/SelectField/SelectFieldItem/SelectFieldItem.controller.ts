import { UseItemControllerType } from './SelectFieldItem.types';

export const useItemController: UseItemControllerType = (
  item,
  setSelectedItem,
  setIsOpen,
  callback,
) => {
  const handleClick = () => {
    setSelectedItem?.(item);
    setIsOpen?.(false);
    callback?.(item.id);
  };

  return {
    handleClick,
  };
};
