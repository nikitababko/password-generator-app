import { UseSelectFieldItemControllerType } from './SelectFieldItem.types';

export const useSelectFieldItemController: UseSelectFieldItemControllerType =
  (item, setSelectedItem, setIsOpen, callback) => {
    const handleClick = () => {
      setSelectedItem?.(item);
      setIsOpen?.(false);
      callback?.(item.id, item.label);
    };

    return {
      handleClick,
    };
  };
