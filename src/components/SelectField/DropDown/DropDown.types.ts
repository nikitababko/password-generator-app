import type React from 'react';

import type { SelectFieldItemType } from '../SelectField.types';
import type { LanguagesType } from '../../../hooks/useTranslate/useTranslate.types';

export type DropDownProps = {
  data?: SelectFieldItemType[];
  isOpen: boolean;
  selectedItem: SelectFieldItemType;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<SelectFieldItemType>
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
