import React from 'react';

export type SelectFieldItemType = {
  id: number;
  icon?: React.ReactNode;
  label: string | number;
};

export type SelectFieldProps = {
  data: SelectFieldItemType[];
};

export type ChevronWrapperStylesType = {
  isOpen: boolean;
};

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
