export type ThemeStylesType = {
  isDay: boolean;
};

export type ThemeToggleOpacityStateType = Record<
  'Zero' | 'One',
  number
>;

export type UseThemeToggleType = () => {
  handleClick: () => void;
  isDay: boolean;
};
