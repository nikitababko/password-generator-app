import type { ItemType as FormItemType } from '../Form/Item/Item.types';

export type Props = {
  id: FormItemType['id'];
  onChange: (id: number, value: boolean) => void;
  value: boolean;
  isDisabled: boolean;
};

export type SwitchContainerStylesProps = {
  isActive: boolean;
  isDisabled: Props['isDisabled'];
};
