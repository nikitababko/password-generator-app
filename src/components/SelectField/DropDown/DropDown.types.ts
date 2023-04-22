import type React from 'react';

import type { LanguagesType } from '../../../hooks/useTranslate/useTranslate.types';
import type { ItemType } from '../Item/Item.types';

export type DropDownProps = {
  data?: ItemType[];
  isOpen: boolean;
  selectedItem: ItemType;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<ItemType>
  >;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  callback?: (
    id: number | LanguagesType,
    value: string | number,
  ) => void;
};

export type DropDownPropsContainerStylesProps = {
  isOpen: boolean;
};
