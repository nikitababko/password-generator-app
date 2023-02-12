import React from 'react';

export type UseOnClickOutsideType = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: Event) => void,
) => void;
