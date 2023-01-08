import { useRef, useState } from 'react';

import {
  SelectFieldItemType,
  UseSelectFieldControllerType,
} from './SelectField.types';
import { useOnClickOutside } from '../../hooks';

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
