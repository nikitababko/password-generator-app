import type { HandleClickType } from '../Item/Item.types';
import { useAppContext } from '../../../store';
import { setFormItemsAction } from '../../../store/appActions.actions';

import type {
  IsDisabledItemType,
  UseControllerType,
} from './TopSection.types';

export const useController: UseControllerType = () => {
  const [state, dispatch] = useAppContext();

  const handleClick: HandleClickType = (id, value) => {
    dispatch(
      setFormItemsAction(state.formItems, id, value),
    );
  };

  const isLastActiveItemId = () => {
    const items = state.formItems.filter((formItem) => {
      return formItem.value === true;
    });

    if (items.length <= 1) {
      return items[0].id;
    }

    return null;
  };

  const isDisabledItem: IsDisabledItemType = (
    formItemId,
  ) => {
    return isLastActiveItemId() === formItemId;
  };

  return {
    formItems: state.formItems,
    handleClick,
    isLastActiveItemId,
    isDisabledItem,
  };
};
