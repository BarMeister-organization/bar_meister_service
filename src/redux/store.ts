import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore, 
  persistReducer, 
  FLUSH, 
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import searchReducer from './searchFilter/slice';
import cocktailsReducer from './cocktails/slice';
import authReducer, { AuthSlice } from './auth/slice';
import { PersistPartial } from 'redux-persist/es/persistReducer';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  debug: true,
};

const persistedAuthReducer = persistReducer<AuthSlice & PersistPartial>(authConfig, authReducer);


const store = configureStore({
  reducer: {
    search: searchReducer,
    cocktails: cocktailsReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;