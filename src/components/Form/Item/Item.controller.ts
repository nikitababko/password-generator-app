import { useMemo, useState } from 'react';

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

  const isFormItemPasswordLength = useMemo(() => {
    return itemId === 1;
  }, [itemId]);

  const defaultOptionPasswordLength = useMemo(() => {
    const storedValue = localStorage.getItem('formItems');
    return storedValue
      ? JSON.parse(storedValue)[0].selectedOption
      : null;
  }, []);

  return {
    valueExampleIsVisible,
    handleClick,
    isFormItemPasswordLength,
    t,
    defaultOptionPasswordLength,
  };
};
