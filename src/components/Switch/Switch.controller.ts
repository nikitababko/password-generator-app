import { useEffect, useState } from 'react';

import type { Props } from './Switch.types';

export const useController = (
  value: Props['value'],
  callback: Props['callback'],
  id: Props['id'],
) => {
  const [isActive, setIsActive] = useState(value);

  useEffect(() => {
    callback?.(id, isActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isActive]);

  const handleClick = () => {
    setIsActive((previousState) => !previousState);
  };

  return {
    isActive,
    handleClick,
  };
};
