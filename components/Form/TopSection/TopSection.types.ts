import { HandleClickType } from '../FormItem/FormItem.types';
import { FormItemsType } from '../../../store/store.types';

export type UseTopSectionControllerType = () => {
  formItems: FormItemsType[];
  handleClick: HandleClickType;
};
