import type React from 'react';

import type { LanguagesType } from '../../hooks/useTranslate/useTranslate.types';

import type { ItemType } from './Item/Item.types';

export type Props = {
  data?: ItemType[];
  styles?: Partial<{
    width: string;
  }>;
  callback?: (
    id: ItemType['id'] | LanguagesType,
    value: string | number,
  ) => void;
};

export type ChevronWrapperProps = {
  isOpen: ReturnType<UseControllerType>['isOpen'];
};

export type ContainerStylesProps = Pick<Props, 'styles'>;

export type UseControllerType = (data: ItemType[]) => {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: ItemType;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<ItemType>
  >;
  handleClick: () => void;
  ref: React.RefObject<HTMLDivElement>;
};
