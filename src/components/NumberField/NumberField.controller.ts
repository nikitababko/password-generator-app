import type React from 'react';
import { useEffect, useState } from 'react';
import type { UseControllerArguments } from './NumberField.types';
import { useDebounce } from '../../hooks';
import { removeZeroFromBeginString } from '../../helpers';

export const useController = ({
  id,
  externalValue,
  onChange,
}: UseControllerArguments) => {
  const [value, setValue] = useState<number>(
    Number(externalValue) ?? 12,
  );

  const debouncedCallback = useDebounce(onChange, 1000);

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const eventTargetValue = Number(
      removeZeroFromBeginString(event.target.value),
    );

    if (eventTargetValue < 257) {
      setValue(eventTargetValue);
    }
  };

  useEffect(() => {
    debouncedCallback?.(id, value);
  }, [id, value, debouncedCallback]);

  return {
    value,
    handleOnChange,
    setValue,
  };
};
