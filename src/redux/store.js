import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import tripFormReducer from './tripFormSlice';
import sortingReducer from './sortingSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    sorting: sortingReducer,
    tripForm: tripFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
