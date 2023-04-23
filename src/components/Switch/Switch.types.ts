import type { ItemType as FormItemType } from '../Form/Item/Item.types';

export type Props = {
  id: FormItemType['id'];
  callback: (id: number, value: boolean) => void;
  value: boolean;
  isDisabled: boolean;
};

export type SwitchContainerStylesProps = {
  isActive: ReturnType<UseControllerType>['isActive'];
  isDisabled: Props['isDisabled'];
};

export type UseControllerType = (
  value: Props['value'],
  callback: Props['callback'],
  id: Props['id'],
) => {
  isActive: boolean;
  handleClick: () => void;
};
