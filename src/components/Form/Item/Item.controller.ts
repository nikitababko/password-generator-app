import { useState } from 'react';

import { useTranslate } from '../../../hooks';

import type { UseControllerType } from './Item.types';

export const useController: UseControllerType = (
  itemId,
) => {
  const [valueExampleIsVisible, setValueExampleIsVisible] =
    useState<boolean>(false);
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
