import type {
  ActionType,
  StoreInitialStateType,
} from './store.types';
import { ActionTypes } from './appActions.data';

export const appReducer = (
  state: StoreInitialStateType,
  action: ActionType,
): StoreInitialStateType => {
  switch (action.type) {
    case ActionTypes.THEME_TOGGLE:
      return {
        ...state,
        theme: action.payload,
      };

    case ActionTypes.CHANGE_LANG:
      return {
        ...state,
        lang: action.payload,
      };

    case ActionTypes.SET_FORM_ITEMS:
      return {
        ...state,
        formItems: action.payload,
      };

    default:
      return state;
  }
};
