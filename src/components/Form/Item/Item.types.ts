export type ItemProps = {
  item: ItemType;
  callback: (
    id: ItemType['id'],
    value: ItemType['value'],
    option?: {
      id: ItemType['id'];
      value: ItemType['value'];
    },
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
  id: ItemType['id'],
  value: ItemType['value'],
  option?: {
    id: ItemType['id'];
    value: ItemType['value'];
  },
) => void;

export type ItemType = {
  id: number;
  label: string;
  valueExample: string;
  type: 'select' | 'switch';
  value: string | number | boolean;
  selectedOption?: {
    id: number | string;
    value: number | string;
  } | null;
  options?: {
    id: number;
    value: number;
  }[];
};
