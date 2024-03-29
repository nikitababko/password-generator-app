import type React from 'react';

export type UseOnClickOutsideType = <T extends HTMLElement>(
  reference: React.RefObject<T>,
  handler: (event: Event) => void,
) => void;
