import { HandleClickType } from '../FormItem/FormItem.types';
import { useAppContext } from '../../../store';

import { UseTopSectionControllerType } from './TopSection.types';

export const useTopSectionController: UseTopSectionControllerType =
  () => {
    const {
      form: [formItems, setFormItems],
    } = useAppContext();

    const handleClick: HandleClickType = (id, value) => {
      setFormItems((prevState) => {
        return prevState?.map((prevStateItem) => {
          return prevStateItem.id === id
            ? { ...prevStateItem, value }
            : prevStateItem;
        });
      });
    };

    return {
      formItems,
      handleClick,
    };
  };
