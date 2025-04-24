import { configureStore } from '@reduxjs/toolkit';
import tripReducer from './tripSlice';
import { fetchData } from './fetch';

const preloadedState = (await fetchData()) || { trips: [] };

export const store = configureStore({
  reducer: {
    trips: tripReducer,
  },
  preloadedState,
});
