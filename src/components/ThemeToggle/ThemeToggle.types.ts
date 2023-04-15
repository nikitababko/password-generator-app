export type ThemeStylesType = {
  isDay: boolean;
};

export type UseThemeToggleType = () => {
  handleClick: () => void;
  isDay: boolean;
};
