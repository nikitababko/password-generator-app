import type { LanguagesType } from '../../../hooks/useTranslate/useTranslate.types';
import type { ItemType } from '../Item/Item.types';
import type { UseSelectFieldControllerType } from '../SelectField.types';

export type Props = {
  data?: ItemType[];
  isOpen: ReturnType<UseSelectFieldControllerType>['isOpen'];
  selectedItem: ReturnType<UseSelectFieldControllerType>['selectedItem'];
  setSelectedItem: ReturnType<UseSelectFieldControllerType>['setSelectedItem'];
  setIsOpen: ReturnType<UseSelectFieldControllerType>['setIsOpen'];
  callback?: (
    id: number | LanguagesType,
    value: string | number,
  ) => void;
};

export type ContainerStylesProps = {
  isOpen: Props['isOpen'];
};
