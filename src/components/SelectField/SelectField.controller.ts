import { useRef, useState } from 'react';

import { useOnClickOutside } from '../../hooks';

import type { UseSelectFieldControllerType } from './SelectField.types';
import type { ItemType } from './Item/Item.types';

export const useSelectFieldController: UseSelectFieldControllerType =
  (data) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const firstItem = data[0];

    const [selectedItem, setSelectedItem] =
      useState<ItemType>(firstItem);

    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => setIsOpen?.(false));

    const handleClick = () => setIsOpen((prev) => !prev);

    return {
      isOpen,
      setIsOpen,
      selectedItem,
      setSelectedItem,
      handleClick,
      ref,
    };
  };
