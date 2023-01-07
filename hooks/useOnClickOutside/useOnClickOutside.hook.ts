import { useEffect } from 'react';

import { UseOnClickOutsideType } from './useOnClickOutside.types';

export const useOnClickOutside: UseOnClickOutsideType = (
  ref,
  handler,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;

      if (
        !el ||
        el.contains((event?.target as Node) || null)
      ) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
