import type {
  HandleClickType,
  ItemType as FormItemsType,
} from '../Item/Item.types';

export type UseControllerType = () => {
  formItems: FormItemsType[];
  handleClick: HandleClickType;
  isDisabledItem: IsDisabledItemType;
};

export type IsDisabledItemType = (
  formItemId: FormItemsType['id'],
) => boolean;
