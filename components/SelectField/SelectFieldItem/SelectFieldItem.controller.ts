import { UseItemControllerType } from './SelectFieldItem.types';

export const useItemController: UseItemControllerType = (
  item,
  setSelectedItem,
  setIsOpen,
) => {
  const handleClick = () => {
    setSelectedItem?.(item);
    setIsOpen?.(false);
  };

  return {
    handleClick,
  };
};
