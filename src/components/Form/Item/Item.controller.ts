import { useMemo, useState } from 'react';

import { useTranslate } from '../../../hooks';
import type { ItemType } from './Item.types';

export const useController = (item: ItemType) => {
  const [valueExampleIsVisible, setValueExampleIsVisible] =
    useState(false);
  const t = useTranslate();

  const isFormItemSaveMySettings =
    item.label === 'saveMySettings';

  const handleClick = () => {
    setValueExampleIsVisible(
      (previousState) => !previousState,
    );
  };

  const isFormItemPasswordLength = useMemo(() => {
    return item.label === 'passwordLength';
  }, [item.label]);

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
    isFormItemSaveMySettings,
  };
};
