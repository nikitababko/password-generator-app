import type { HandleClickType } from '../FormItem/FormItem.types';
import { useAppContext } from '../../../store';

import type { UseTopSectionControllerType } from './TopSection.types';
import { setFormItemsAction } from '../../../store/appActions.actions';

export const useTopSectionController: UseTopSectionControllerType =
  () => {
    const [state, dispatch] = useAppContext();

    const handleClick: HandleClickType = (id, value) => {
      dispatch(
        setFormItemsAction(state.formItems, id, value),
      );
    };

    const isLastActiveFormItemId = (() => {
      const items = state.formItems.filter((formItem) => {
        return formItem.value === true;
      });

      if (items.length <= 1) {
        return items[0].id;
      }

      return null;
    })();

    return {
      formItems: state.formItems,
      handleClick,
      isLastActiveFormItemId,
    };
  };
