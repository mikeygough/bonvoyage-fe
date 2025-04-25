import { configureStore } from '@reduxjs/toolkit';
import tripReducer from './tripSlice';
import activityReducer from './activitySlice';

export const store = configureStore({
  reducer: {
    trips: tripReducer,
    activities: activityReducer,
  },
});
