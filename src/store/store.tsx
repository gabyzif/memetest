import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage: storageSession
};

const persistedReducer = persistReducer(persistConfig, gameReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store);
