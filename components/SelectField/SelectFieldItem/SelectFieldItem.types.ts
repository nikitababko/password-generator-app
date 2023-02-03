import React from 'react';

import { SelectFieldItemType } from '../SelectField.types';

export type SelectFieldItemProps = {
  item: SelectFieldItemType;
  isDropDownItem?: boolean;
  selectedItemEqualToItem?: boolean;
  setSelectedItem?: React.Dispatch<
    React.SetStateAction<SelectFieldItemType>
  >;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  callback?: (id: number) => void;
};

export type SelectFieldItemContainerStylesType = {
  itemId: number;
  isDropDownItem?: boolean;
  selectedItemEqualToItem?: boolean;
};

export type UseItemControllerType = (
  item: SelectFieldItemType,
  setSelectedItem?: React.Dispatch<
    React.SetStateAction<SelectFieldItemType>
  >,
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>,
  callback?: (id: number) => void,
) => { handleClick: () => void };
