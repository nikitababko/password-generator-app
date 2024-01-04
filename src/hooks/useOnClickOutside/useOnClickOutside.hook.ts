import { useEffect } from 'react';

import type { UseOnClickOutsideType } from './useOnClickOutside.types';

export const useOnClickOutside: UseOnClickOutsideType = (
  reference,
  handler,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const element = reference?.current;

      if (
        !element ||
        element.contains((event?.target as Node) || null)
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
  }, [reference, handler]);
};
