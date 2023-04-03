import {
  FormItemsType,
  HandleClickType,
} from '../FormItem/FormItem.types';

export type UseTopSectionControllerType = () => {
  formItems: FormItemsType[];
  handleClick: HandleClickType;
  isLastActiveFormItemId: number | null;
};
