import type {
  FormItemsType,
  HandleClickType,
} from '../FormItem/FormItem.types';

export type UseTopSectionControllerType = () => {
  formItems: FormItemsType[];
  handleClick: HandleClickType;
  isDisabledItem: IsDisabledItemType;
};

export type IsDisabledItemType = (
  formItemId: number,
) => boolean;
