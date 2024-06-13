import { useCallback, useRef } from 'react';

export const useDebounce = <T extends unknown[]>(
  callback: (...arguments_: T) => void,
  delay: number,
) => {
  const timer = useRef<NodeJS.Timeout | undefined>();

  const debouncedCallback = useCallback(
    (...arguments_: T) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...arguments_);
      }, delay);
    },
    [callback, delay],
  );

  return debouncedCallback;
};
