import React, { useContext } from 'react';

import { ThemeType } from '../utils/designTokens/designTokens.types';
import { LightTheme } from '../utils/designTokens';

import { formItemsInitialState } from './store.data';
import {
  FormItemsType,
  StoreContextType,
  StoreProviderProps,
} from './store.types';

export const StoreContext =
  React.createContext<StoreContextType>({
    form: [[], () => {}],
    theme: [LightTheme, () => {}],
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

  const store: StoreContextType = {
    form: [formItems, setFormItems],
    theme: [theme, setTheme],
  };

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};
