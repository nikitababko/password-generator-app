import type { ItemsType as FormItemsType } from '../components/Form/Item/Item.types';
import type { ThemeType } from '../utils/designTokens/designTokens.types';
import type { LanguagesType } from '../hooks/useTranslate/useTranslate.types';

import type { ActionType } from './store.types';
import { ActionTypes } from './appActions.data';

export const themeToggleAction = (
  theme: ThemeType,
): ActionType => ({
  type: ActionTypes.THEME_TOGGLE,
  payload: theme,
});

export const changeLangAction = (
  id: LanguagesType,
): ActionType => ({
  type: ActionTypes.CHANGE_LANG,
  payload: id,
});

export const setFormItemsAction = (
  formItems: FormItemsType[],
  id: number,
  value: string | number | boolean,
): ActionType => ({
  type: ActionTypes.SET_FORM_ITEMS,
  payload: formItems?.map((formItem) => {
    return formItem.id === id
      ? { ...formItem, value }
      : formItem;
  }),
});
