export type ItemProps = {
  item: ItemType;
  onChange: (
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
  isFormItemSaveMySettings: boolean;
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
) => void;

export type ItemType = {
  id: number;
  label: string;
  valueExample: string;
  type: 'number' | 'switch';
  value: number | boolean;
};
