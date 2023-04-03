export type SwitchProps = {
  id: number;
  callback: (id: number, value: boolean) => void;
  value: boolean;
  isDisabled: boolean;
};

export type SwitchContainerStylesProps = {
  isActive: boolean;
  isDisabled: boolean;
};

export type UseSwitchControllerType = (
  value: boolean,
  callback: (id: number, value: boolean) => void,
  id: number,
) => {
  isActive: boolean;
  handleClick: () => void;
};
