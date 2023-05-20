import type { GetAnimationType } from './getAnimation.types';

const defaultTime = 0.3;

export const getAnimation: GetAnimationType = (
  time = defaultTime,
) => {
  return `${time}s ease-in-out`;
};
