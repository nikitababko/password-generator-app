import { useEffect, useState } from 'react';

import { useTranslate } from '../../../hooks';

import type { UseControllerType } from './Item.types';
import { visibleTime } from './Item.data';

export const useController: UseControllerType = (
  itemId,
) => {
  const [valueExampleIsVisible, setValueExampleIsVisible] =
    useState<boolean>(false);
  const t = useTranslate();

  const handleClick = () => {
    setValueExampleIsVisible((prevState) => !prevState);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (valueExampleIsVisible) {
      timer = setTimeout(() => {
        setValueExampleIsVisible(false);
      }, visibleTime);
    }

    return () => {
      clearTimeout(timer as NodeJS.Timeout);
    };
  }, [valueExampleIsVisible]);

  const isPasswordLengthRow = itemId === 1;

  return {
    valueExampleIsVisible,
    handleClick,
    isPasswordLengthRow,
    t,
  };
};
