import React, { useContext, useReducer } from 'react';

import type {
  StoreProviderProps,
  StoreType,
} from './store.types';
import { appReducer } from './appReducer.reducers';
import { storeInitialState } from './store.data';

export const StoreContext = React.createContext<StoreType>([
  storeInitialState,
  () => {},
]);

export const useAppContext = () =>
  useContext<StoreType>(StoreContext);

export const StoreProvider: React.FC<
  StoreProviderProps
> = ({ children }) => {
  const [state, dispatch] = useReducer(
    appReducer,
    storeInitialState,
  );

  const store: StoreType = [state, dispatch];

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};
