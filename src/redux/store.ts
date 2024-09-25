import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import searchReducer from './searchFilter/slice';
import cocktailsReducer from './cocktails/slice';

const rootReducer = combineReducers({
  search: searchReducer,
  cocktails: cocktailsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;