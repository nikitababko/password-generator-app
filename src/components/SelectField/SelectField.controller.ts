import { useRef, useState } from 'react';

import { useOnClickOutside } from '../../hooks';

import type {
  SelectFieldItemType,
  UseSelectFieldControllerType,
} from './SelectField.types';

export const useSelectFieldController: UseSelectFieldControllerType =
  (firstItem) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] =
      useState<SelectFieldItemType>(firstItem);

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
