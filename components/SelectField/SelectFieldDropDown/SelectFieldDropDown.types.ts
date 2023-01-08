import React from 'react';

import { SelectFieldItemType } from '../SelectField.types';

export type SelectFieldDropDownProps = {
  data: SelectFieldItemType[];
  isOpen: boolean;
  selectedItem: SelectFieldItemType;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<SelectFieldItemType>
  >;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SelectFieldDropDownContainerStylesType = {
  isOpen: boolean;
};
