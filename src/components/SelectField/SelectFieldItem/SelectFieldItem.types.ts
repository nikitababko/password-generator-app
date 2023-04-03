import type React from 'react';

import type { SelectFieldItemType } from '../SelectField.types';
import type { LanguagesType } from '../../../hooks/useTranslate/useTranslate.types';

export type SelectFieldItemProps = {
  item: SelectFieldItemType;
  isDropDownItem?: boolean;
  selectedItemEqualToItem?: boolean;
  setSelectedItem?: React.Dispatch<
    React.SetStateAction<SelectFieldItemType>
  >;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  callback?: (
    id: number | LanguagesType,
    value: string | number,
  ) => void;
};

export type SelectFieldItemContainerStylesType = {
  itemId: number | LanguagesType;
  isDropDownItem?: boolean;
  selectedItemEqualToItem?: boolean;
};

export type UseSelectFieldItemControllerType = (
  item: SelectFieldItemType,
  setSelectedItem?: React.Dispatch<
    React.SetStateAction<SelectFieldItemType>
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
