import type React from 'react';

import type { LanguagesType } from '../../hooks/useTranslate/useTranslate.types';

import type { ItemType } from './Item/Item.types';

export type SelectFieldProps = {
  data?: ItemType[];
  styles?: Partial<{
    width: string;
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

export type ContainerStylesProps = Partial<{
  styles?: Partial<{
    width: string;
  }>;
}>;

export type UseSelectFieldControllerType = (
  data: ItemType[],
) => {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: ItemType;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<ItemType>
  >;
  handleClick: () => void;
  ref: React.RefObject<HTMLDivElement>;
};
