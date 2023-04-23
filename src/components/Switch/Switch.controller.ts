import { useEffect, useState } from 'react';

import type { UseControllerType } from './Switch.types';

export const useController: UseControllerType = (
  value,
  callback,
  id,
) => {
  const [isActive, setIsActive] = useState<boolean>(value);

  useEffect(() => {
    callback?.(id, isActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isActive]);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return {
    isActive,
    handleClick,
  };
};
