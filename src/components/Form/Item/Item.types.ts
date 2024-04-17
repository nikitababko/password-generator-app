export type ItemProps = {
  item: ItemType;
  callback: (
    id: number,
    value: string | number | boolean,
  ) => void;
  isDisabled: boolean;
};

export type ItemLeftColStylesProps = {
  isFormItemPasswordLength: boolean;
};

export type ItemValueExampleStylesProps = {
  valueExampleIsVisible: boolean;
};

export type ItemLabelStylesProps = {
  valueExampleIsVisible: boolean;
};

export type HandleClickType = (
  id: number,
  value: string | number | boolean,
) => void;

export type ItemType = {
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
