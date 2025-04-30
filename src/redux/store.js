import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import sortingReducer from './sortingSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    sorting: sortingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
