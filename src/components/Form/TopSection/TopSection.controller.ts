import { useCallback, useMemo } from 'react';

import type {
  HandleClickType,
  ItemType,
} from '../Item/Item.types';
import { useAppContext } from '../../../store';
import { setFormItemAction } from '../../../store/appActions.actions';

export const useController = () => {
  const [state, dispatch] = useAppContext();

  const memoFormItems = useMemo(
    () => state.formItems,
    [state.formItems],
  );

  const handleClick: HandleClickType = useCallback(
    (id, value) => {
      dispatch(
        setFormItemAction(state.formItems, id, value),
      );
    },
    [dispatch, state.formItems],
  );

  const isLastActiveItemId = useMemo(() => {
    const items = state.formItems.filter((formItem) => {
      return formItem.value === true;
    });

    if (items.length <= 1) {
      return items[0].id;
    }

    return null;
  }, [state.formItems]);

  const formItemsWithOnlyTrue = useMemo(
    () =>
      state.formItems.filter((formItem) => {
        return formItem.value === true;
      }),
    [state.formItems],
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
    handleClick,
    isLastActiveItemId,
    isDisabledItem,
  };
};
