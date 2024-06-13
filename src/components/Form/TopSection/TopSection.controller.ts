import { useCallback, useMemo } from 'react';

import type {
  HandleClickType,
  ItemType,
} from '../Item/Item.types';
import { useFormStore } from '../../../store/formState';

export const useController = () => {
  const { formItems, changeFormItemValue } = useFormStore();

  const memoFormItems = useMemo(
    () => formItems,
    [formItems],
  );

  const handleOnChange: HandleClickType = useCallback(
    (id, value) => {
      changeFormItemValue(id, value);
    },
    [changeFormItemValue],
  );

  const isLastActiveItemId = useMemo(() => {
    const items = formItems.filter((formItem) => {
      return formItem.value === true;
    });

    if (items.length <= 1) {
      return items[0].id;
    }

    return null;
  }, [formItems]);

  const formItemsWithOnlyTrue = useMemo(
    () =>
      formItems.filter((formItem) => {
        return formItem.value === true;
      }),
    [formItems],
  );

  const includeFormItems = useMemo(() => {
    return formItemsWithOnlyTrue.filter((formItem) => {
      return formItem.label.includes('include');
    });
  }, [formItemsWithOnlyTrue]);

  const excludeFormItems = useMemo(() => {
    return formItemsWithOnlyTrue.filter((formItem) => {
      return formItem.label.includes('exclude');
    });
  }, [formItemsWithOnlyTrue]);

  const hasExcludeFieldId = useMemo(() => {
    if (
      excludeFormItems.length > 0 &&
      includeFormItems.length === 1
    ) {
      const excludeFieldId = formItemsWithOnlyTrue.find(
        (formItem) => {
          return formItem.label.includes('exclude');
        },
      )?.id;

      if (excludeFieldId) {
        return formItemsWithOnlyTrue.find((formItem) => {
          return formItem.id !== excludeFieldId;
        })?.id;
      }

      return null;
    }

    return null;
  }, [
    excludeFormItems.length,
    formItemsWithOnlyTrue,
    includeFormItems.length,
  ]);

  const isDisabledItem = useCallback(
    (formItemId: ItemType['id']) => {
      return (
        (isLastActiveItemId || hasExcludeFieldId) ===
        formItemId
      );
    },
    [hasExcludeFieldId, isLastActiveItemId],
  );

  return {
    formItems: memoFormItems,
    handleOnChange,
    isLastActiveItemId,
    isDisabledItem,
  };
};
