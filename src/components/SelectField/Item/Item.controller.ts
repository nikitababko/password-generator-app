import { useEffect } from 'react';
import type { UseControllerArgumentsType } from './Item.types';

export const useController = ({
  item,
  setSelectedItem,
  setIsOpen,
  callback,
  defaultOption,
}: UseControllerArgumentsType) => {
  const handleClick = () => {
    setSelectedItem?.(item);
    setIsOpen?.(false);
    callback?.(item.id, item.value);
  };

  useEffect(() => {
    if (defaultOption) {
      setSelectedItem?.(defaultOption);
      callback?.(defaultOption.id, defaultOption.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultOption]);

  return {
    handleClick,
  };
};
