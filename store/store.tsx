import React, { useContext } from 'react';

import { formItemsInitialState } from './store.data';
import {
  FormItemsType,
  StoreContextType,
  StoreProviderProps,
} from './store.types';

export const StoreContext =
  React.createContext<StoreContextType>({
    form: [[], () => {}],
  });

export const useAppContext = () =>
  useContext<StoreContextType>(StoreContext);

export const StoreProvider: React.FC<
  StoreProviderProps
> = ({ children }) => {
  const [formItems, setFormItems] = React.useState<
    FormItemsType[]
  >(formItemsInitialState);

  const store: StoreContextType = {
    form: [formItems, setFormItems],
  };

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};
