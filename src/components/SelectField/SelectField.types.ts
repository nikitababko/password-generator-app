import React from 'react';
import { LanguagesType } from '../../hooks/useTranslate/useTranslate.types';

export type SelectFieldItemType = {
  id: number | LanguagesType;
  icon?: React.ReactNode;
  label: string | number;
};

export type SelectFieldProps = {
  data?: SelectFieldItemType[];
  styles?: Partial<{
    maxWidth: string;
    // backgroundColor: keyof ColorDesignTokensType;
  }>;
  callback?: (
    id: number | LanguagesType,
    value: string | number,
  ) => void;
};

export type ChevronWrapperProps = {
  isOpen: boolean;
};

export type ContainerStylesProps = Pick<
  SelectFieldProps,
  'styles'
>;

export type UseSelectFieldControllerType = (
  firstItem: SelectFieldItemType,
) => {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: SelectFieldItemType;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<SelectFieldItemType>
  >;
  handleClick: () => void;
  ref: React.RefObject<HTMLDivElement>;
};
