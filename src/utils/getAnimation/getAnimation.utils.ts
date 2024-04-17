const defaultTime = 0.3;

export const getAnimation = (
  time: number = defaultTime,
) => {
  return `${time}s ease-in-out`;
};
