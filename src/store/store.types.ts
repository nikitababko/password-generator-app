import React, { Dispatch } from 'react';

import { ThemeType } from '../utils/designTokens/designTokens.types';
import { FormItemsType } from '../components/Form/FormItem/FormItem.types';
import { LanguagesType } from '../hooks/useTranslate/useTranslate.types';
import { ActionTypes } from './appActions.data';

export type StoreType = [
  StoreInitialStateType,
  Dispatch<ActionType>,
];

export type StoreProviderProps = {
  children: React.ReactNode;
};

export type StoreInitialStateType = {
  theme: ThemeType;
  lang: LanguagesType;
  formItems: FormItemsType[];
};

type ToggleThemeActionType = {
  type: ActionTypes.THEME_TOGGLE;
  payload: ThemeType;
};

type ChangeLangActionType = {
  type: ActionTypes.CHANGE_LANG;
  payload: LanguagesType;
};

type FormItemActionType = {
  type: ActionTypes.SET_FORM_ITEMS;
  payload: FormItemsType[];
};

export type ActionType =
  | ToggleThemeActionType
  | ChangeLangActionType
  | FormItemActionType;
