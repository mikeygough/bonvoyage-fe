import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTrips = createAsyncThunk(
  'trips/fetchTrips',
  async () => {
    const res = await fetch(`http://127.0.0.1:3000/trips.json`);
    const data = await res.json();
    return data;
  }
);

const tripSlice = createSlice({
  name: 'trips',
  initialState: {
    tripData: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrips.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrips.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tripData = action.payload;
      })
      .addCase(fetchTrips.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tripSlice.reducer;

export const selectAllTrips = (state) => state.trips.tripData;
export const selectAllTripsStatus = (state) => state.trips.status;
