import { useState } from 'react';

import { useTranslate } from '../../../hooks';

import { visibleTime } from './FormItem.data';
import type { UseFormItemControllerType } from './FormItem.types';

export const useFormItemController: UseFormItemControllerType =
  (itemId) => {
    const [
      valueExampleIsVisible,
      setValueExampleIsVisible,
    ] = useState<boolean>(false);
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
