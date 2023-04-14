import type { AnimationType } from './animation.types';

const defaultTime = 0.3;

export const animation: AnimationType = (
  time = defaultTime,
) => {
  return `${time}s ease-in-out`;
};
