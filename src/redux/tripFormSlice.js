import { createSlice } from '@reduxjs/toolkit';

const tripFormSlice = createSlice({
  name: 'tripForm',
  initialState: false,
  reducers: {
    setDisplay: (state, action) => action.payload,
  },
});

export const { setDisplay } = tripFormSlice.actions;
export default tripFormSlice.reducer;
