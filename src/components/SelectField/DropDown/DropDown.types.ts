import type React from 'react';
import type { ItemType } from '../Item/Item.types';

export type Props = {
  options?: ItemType[];
  isOpen: boolean;
  selectedItem: ItemType;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<ItemType>
  >;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  callback?: (
    id: ItemType['id'],
    value: ItemType['value'],
  ) => void;
  defaultOption?: ItemType | null;
};

export type ContainerStylesProps = {
  isOpen: Props['isOpen'];
};
