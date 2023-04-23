import { useState } from 'react';

import { useTranslate } from '../../../hooks';

import { visibleTime } from './Item.data';
import type { UseControllerType } from './Item.types';

export const useController: UseControllerType = (
  itemId,
) => {
  const [valueExampleIsVisible, setValueExampleIsVisible] =
    useState<boolean>(false);
  const t = useTranslate();

  const handleClick = () => {
    setValueExampleIsVisible((prevState) => !prevState);
    setTimeout(
      () => setValueExampleIsVisible(false),
      visibleTime,
    );
  };

  const isPasswordLengthRow = itemId === 1;

  return {
    valueExampleIsVisible,
    handleClick,
    isPasswordLengthRow,
    t,
  };
};
