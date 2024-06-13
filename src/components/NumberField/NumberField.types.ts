export type Props = {
  id: number;
  value: number;
  onChange: (id: number, value: number) => void;
};

export type UseControllerArguments = {
  id: Props['id'];
  externalValue: Props['value'];
  onChange: Props['onChange'];
};
