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

  return {
    valueExampleIsVisible,
    handleClick,
    isFormItemPasswordLength,
    t,
    isFormItemSaveMySettings,
  };
};
