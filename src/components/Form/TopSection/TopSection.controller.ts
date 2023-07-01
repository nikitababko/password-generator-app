import { useCallback, useMemo } from 'react';

import type { HandleClickType } from '../Item/Item.types';
import { useAppContext } from '../../../store';
import { setFormItemAction } from '../../../store/appActions.actions';

import type {
  IsDisabledItemType,
  UseControllerType,
} from './TopSection.types';

export const useController: UseControllerType = () => {
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

  const isLastActiveItemId = useCallback(() => {
    const items = state.formItems.filter((formItem) => {
      return formItem.value === true;
    });

    if (items.length <= 1) {
      return items[0].id;
    }

    return null;
  }, [state.formItems]);

  const isDisabledItem = useCallback<IsDisabledItemType>(
    (formItemId) => {
      return isLastActiveItemId() === formItemId;
    },
    [isLastActiveItemId],
  );

  return {
    formItems: memoFormItems,
    handleClick,
    isLastActiveItemId,
    isDisabledItem,
  };
};
