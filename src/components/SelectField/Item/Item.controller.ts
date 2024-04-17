import type { UseControllerArgumentsType } from './Item.types';

export const useController = ({
  item,
  setSelectedItem,
  setIsOpen,
  callback,
}: UseControllerArgumentsType) => {
  const handleClick = () => {
    setSelectedItem?.(item);
    setIsOpen?.(false);
    callback?.(item.id, item.label);
  };

  return {
    handleClick,
  };
};
