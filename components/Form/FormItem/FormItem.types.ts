import { FormItemsType } from '../../../store/store.types';

export type FormItemProps = {
  item: FormItemsType;
  callback: (
    id: number,
    value: string | number | boolean,
  ) => void;
};

export type HandleClickType = (
  id: number,
  value: string | number | boolean,
) => void;
