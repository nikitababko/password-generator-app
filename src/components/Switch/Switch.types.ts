import type { ItemType as FormItemType } from '../Form/Item/Item.types';

export type Props = {
  id: FormItemType['id'];
  callback: (id: number, value: boolean) => void;
  value: boolean;
  isDisabled: boolean;
};

export type SwitchContainerStylesProps = {
  isActive: ReturnType<UseSwitchControllerType>['isActive'];
  isDisabled: Props['isDisabled'];
};

export type UseSwitchControllerType = (
  value: Props['value'],
  callback: Props['callback'],
  id: Props['id'],
) => {
  isActive: boolean;
  handleClick: () => void;
};
