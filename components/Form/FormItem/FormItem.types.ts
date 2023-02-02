export type FormItemProps = {
  item: Omit<FormItemDataType, 'id'>;
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
