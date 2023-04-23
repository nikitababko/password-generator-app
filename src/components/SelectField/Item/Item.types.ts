import type React from 'react';

import type { LanguagesType } from '../../../hooks/useTranslate/useTranslate.types';

export type ItemType = {
  id: number | LanguagesType;
  icon?: React.ReactNode;
  label: string | number;
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
    value: ItemType['label'],
  ) => void;
};

export type ContainerStylesType = {
  itemId: ItemType['id'];
  isDropDownItem?: Props['isDropDownItem'];
  selectedItemEqualToItem?: Props['selectedItemEqualToItem'];
};

export type UseItemControllerType = (
  item: ItemType,
  setSelectedItem?: React.Dispatch<
    React.SetStateAction<ItemType>
  >,
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>,
  callback?: (
    id: ItemType['id'],
    value: ItemType['label'],
  ) => void,
) => { handleClick: () => void };

export type ChildrenStylesProps = {
  selectedItemEqualToItem?: ContainerStylesType['selectedItemEqualToItem'];
};
