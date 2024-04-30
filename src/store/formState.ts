import { create } from 'zustand';
import type { ItemType as FormItemType } from '../components/Form/Item/Item.types';
import { FORM_ITEMS_INITIAL_STATE } from './store.data';

interface FormState {
  formItems: FormItemType[];
  changeFormItemValue: (
    formItems: FormItemType[],
    id: number | string,
    value: string | number | boolean,
    selectedOption?: FormItemType['selectedOption'],
  ) => void;
  setFormItems: (formItems: FormItemType[]) => void;
}

export const useFormStore = create<FormState>((set) => ({
  formItems: FORM_ITEMS_INITIAL_STATE,
  changeFormItemValue: (
    formItems,
    id,
    value,
    selectedOption,
  ) => {
    return set(() => {
      return {
        formItems: formItems?.map((formItem) => {
          return formItem.id === id
            ? {
                ...formItem,
                value,
                selectedOption,
              }
            : formItem;
        }),
      } as FormState;
    });
  },
  setFormItems: (formItems) => {
    return set(() => {
      return { formItems } as FormState;
    });
  },
}));
