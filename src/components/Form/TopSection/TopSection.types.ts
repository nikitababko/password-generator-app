import type {
  HandleClickType,
  ItemsType as FormItemsType,
} from '../Item/Item.types';

export type UseTopSectionControllerType = () => {
  formItems: FormItemsType[];
  handleClick: HandleClickType;
  isDisabledItem: IsDisabledItemType;
};

export type IsDisabledItemType = (
  formItemId: number,
) => boolean;
