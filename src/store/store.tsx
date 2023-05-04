// store.ts
import { configureStore, Store } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { Persistor, persistReducer, persistStore } from 'redux-persist';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';
import thunk from 'redux-thunk';

import gameReducer from './slice';

const makeStore = (): Store & { persistor: Persistor } => {
  const persistConfig = {
    key: 'root',
    storage: storageSession
  };

  const persistedReducer = persistReducer(persistConfig, gameReducer);

  const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: [thunk]
  });

  const persistor = persistStore(store);

  return { ...store, persistor };
};

export const wrapper = createWrapper(makeStore, { debug: true });
