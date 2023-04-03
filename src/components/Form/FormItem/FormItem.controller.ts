import { useState } from 'react';

import type { UseFormItemControllerType } from './FormItem.types';

export const useFormItemController: UseFormItemControllerType =
  (itemId) => {
    const [
      valueExampleIsVisible,
      setValueExampleIsVisible,
    ] = useState<boolean>(false);

    const visibleTime = 2000;
    const passwordLengthId = 1;

    const handleClick = () => {
      setValueExampleIsVisible((prevState) => !prevState);
      setTimeout(
        () => setValueExampleIsVisible(false),
        visibleTime,
      );
    };

    const isPasswordLengthRow = itemId === passwordLengthId;

    return {
      valueExampleIsVisible,
      handleClick,
      isPasswordLengthRow,
    };
  };
