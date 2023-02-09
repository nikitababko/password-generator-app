export type SwitchProps = {
  id: number;
  callback: (id: number, value: boolean) => void;
  value: boolean;
};

export type SwitchContainerStylesProps = {
  isActive: boolean;
};

export type UseSwitchControllerType = (
  value: boolean,
  callback: (id: number, value: boolean) => void,
  id: number,
) => {
  isActive: boolean;
  handleClick: () => void;
};
