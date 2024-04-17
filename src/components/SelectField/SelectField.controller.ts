import { useRef, useState } from 'react';

import { useOnClickOutside } from '../../hooks';
import type { ItemType } from './Item/Item.types';

export const useController = (data: ItemType[]) => {
  const [isOpen, setIsOpen] = useState(false);

  const firstItem = data[0];

  const [selectedItem, setSelectedItem] =
    useState<ItemType>(firstItem);

  const reference = useRef<HTMLDivElement>(null);
  useOnClickOutside(reference, () => setIsOpen?.(false));

  const handleClick = () => {
    setIsOpen((previous) => !previous);
  };

  return {
    isOpen,
    setIsOpen,
    selectedItem,
    setSelectedItem,
    handleClick,
    ref: reference,
  };
};
