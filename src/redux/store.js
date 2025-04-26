import { configureStore } from '@reduxjs/toolkit';
import tripReducer from './tripSlice';
import activityReducer from './activitySlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    trips: tripReducer,
    activities: activityReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
