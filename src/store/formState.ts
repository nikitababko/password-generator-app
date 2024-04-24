import { create } from 'zustand';
import type { ItemType as FormItemsType } from '../components/Form/Item/Item.types';
import { FORM_ITEMS_INITIAL_STATE } from './store.data';

interface FormState {
  formItems: FormItemsType[];
  setFormItems: (
    formItems: FormItemsType[],
    id: number,
    value: string | number | boolean,
  ) => void;
}

export const useFormStore = create<FormState>((set) => ({
  formItems: FORM_ITEMS_INITIAL_STATE,
  setFormItems: (
    formItems: FormItemsType[],
    id: number,
    value: string | number | boolean,
  ) => {
    return set(() => {
      return {
        formItems: formItems?.map((formItem) => {
          return formItem.id === id
            ? { ...formItem, value }
            : formItem;
        }),
      } as FormState;
    });
  },
}));
