import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchActivities = createAsyncThunk(
  'activities/fetchActivities',
  async (tripID) => {
    const res = await fetch(
      `http://127.0.0.1:3000/trips/${tripID}/activities`
    );
    const data = await res.json();
    return data;
  }
);

const activitySlice = createSlice({
  name: 'activities',
  initialState: {
    activityData: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActivities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // i think what's happening is i'm overwriting activityData each time
        state.activityData = action.payload;
      })
      .addCase(fetchActivities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default activitySlice.reducer;

export const selectAllActivities = (state) =>
  state.activities.activityData;
export const selectAllActivitiesStatus = (state) =>
  state.activities.status;
