import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore, 
  FLUSH, 
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
} from 'redux-persist';
import searchReducer from './searchFilter/slice';
import cocktailsReducer from './cocktails/slice';
import { persistedAuthReducer } from './auth/slice';



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