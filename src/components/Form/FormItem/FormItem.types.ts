export type FormItemProps = {
  item: FormItemsType;
  callback: (
    id: number,
    value: string | number | boolean,
  ) => void;
  isDisabled: boolean;
};

export type FormItemLeftColStylesProps = {
  isPasswordLengthRow: boolean;
};

export type FormItemValueExampleStylesProps = {
  valueExampleIsVisible: boolean;
};

export type FormItemLabelStylesProps = {
  valueExampleIsVisible: boolean;
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

export type UseFormItemControllerType = (
  itemId: number,
) => {
  valueExampleIsVisible: boolean;
  handleClick: () => void;
  isPasswordLengthRow: boolean;
};
