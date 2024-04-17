import { useState } from 'react';

import { useTranslate } from '../../../hooks';

export const useController = (itemId: number) => {
  const [valueExampleIsVisible, setValueExampleIsVisible] =
    useState(false);
  const t = useTranslate();

  const handleClick = () => {
    setValueExampleIsVisible(
      (previousState) => !previousState,
    );
  };

  const isFormItemPasswordLength = itemId === 1;

  return {
    valueExampleIsVisible,
    handleClick,
    isFormItemPasswordLength,
    t,
  };
};
