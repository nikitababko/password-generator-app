import type React from 'react';

import type { LanguagesType } from '../../../hooks/useTranslate/useTranslate.types';

export type ItemType = {
  id: number | LanguagesType;
  icon?: React.ReactNode;
  label: string | number;
};

export type ItemProps = {
  item: ItemType;
  isDropDownItem?: boolean;
  selectedItemEqualToItem?: boolean;
  setSelectedItem?: React.Dispatch<
    React.SetStateAction<ItemType>
  >;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  callback?: (
    id: number | LanguagesType,
    value: string | number,
  ) => void;
};

export type ItemContainerStylesType = {
  itemId: number | LanguagesType;
  isDropDownItem?: boolean;
  selectedItemEqualToItem?: boolean;
};

export type UseItemControllerType = (
  item: ItemType,
  setSelectedItem?: React.Dispatch<
    React.SetStateAction<ItemType>
  >,
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>,
  callback?: (
    id: number | LanguagesType,
    value: string | number,
  ) => void,
) => { handleClick: () => void };

export type ChildrenStylesProps = {
  selectedItemEqualToItem?: boolean;
};
