import React, { useContext } from 'react';

import { ThemeType } from '../utils/designTokens/designTokens.types';
import { LightTheme } from '../utils/designTokens';
import { FormItemsType } from '../components/Form/FormItem/FormItem.types';

import { formItemsInitialState } from './store.data';
import {
  StoreContextType,
  StoreProviderProps,
} from './store.types';
import { LanguagesType } from '../hooks/useTranslate/useTranslate.types';

export const StoreContext =
  React.createContext<StoreContextType>({
    form: [[], () => {}],
    theme: [LightTheme, () => {}],
    lang: ['en', () => {}],
  });

export const useAppContext = () =>
  useContext<StoreContextType>(StoreContext);

export const StoreProvider: React.FC<
  StoreProviderProps
> = ({ children }) => {
  const [formItems, setFormItems] = React.useState<
    FormItemsType[]
  >(formItemsInitialState);
  const [theme, setTheme] =
    React.useState<ThemeType>(LightTheme);

  const [lang, setLang] =
    React.useState<LanguagesType>('en');

  const store: StoreContextType = {
    form: [formItems, setFormItems],
    theme: [theme, setTheme],
    lang: [lang, setLang],
  };

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};
