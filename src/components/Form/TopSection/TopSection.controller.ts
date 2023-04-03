import { HandleClickType } from '../FormItem/FormItem.types';
import { useAppContext } from '../../../store';

import { UseTopSectionControllerType } from './TopSection.types';
import { setFormItemsAction } from '../../../store/appActions.actions';

export const useTopSectionController: UseTopSectionControllerType =
  () => {
    const [state, dispatch] = useAppContext();

    const handleClick: HandleClickType = (id, value) => {
      dispatch(
        setFormItemsAction(state.formItems, id, value),
      );
    };

    return {
      formItems: state.formItems,
      handleClick,
    };
  };
