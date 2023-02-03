export type FormItemProps = {
  item: FormItemDataType;
};

export type FormItemDataType = {
  id: number;
  label: string;
  valueExample: string;
  type: 'select' | 'switch';
};

export type SelectData = {
  id: number;
  label: number;
};
