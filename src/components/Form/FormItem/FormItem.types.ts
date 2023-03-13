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

export type FormItemsType = {
  id: number;
  label: string;
  valueExample: string;
  type: 'select' | 'switch';
  value: string | number | boolean;
  options?: {
    id: number;
    label: number;
  }[];
};
