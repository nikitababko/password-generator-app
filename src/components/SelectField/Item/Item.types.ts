import type React from 'react';

import type { LanguagesType } from '../../../hooks/useTranslate/useTranslate.types';

export type ItemType = {
  id: number | LanguagesType | string;
  icon?: React.ReactNode;
  value: string | number;
};

export type Props = {
  item: ItemType;
  isDropDownItem?: boolean;
  selectedItemEqualToItem?: boolean;
  setSelectedItem?: React.Dispatch<
    React.SetStateAction<ItemType>
  >;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  callback?: (
    id: ItemType['id'],
    value: ItemType['value'],
  ) => void;
  defaultOption?: ItemType | null;
};

export type ContainerStylesType = {
  itemId: ItemType['id'];
  isDropDownItem?: Props['isDropDownItem'];
  selectedItemEqualToItem?: Props['selectedItemEqualToItem'];
};

export type UseControllerArgumentsType = {
  item: ItemType;
  defaultOption?: ItemType | null;
  setSelectedItem?: React.Dispatch<
    React.SetStateAction<ItemType>
  >;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  callback?: (
    id: ItemType['id'],
    value: ItemType['value'],
  ) => void;
};

export type ChildrenStylesProps = {
  selectedItemEqualToItem?: ContainerStylesType['selectedItemEqualToItem'];
};
