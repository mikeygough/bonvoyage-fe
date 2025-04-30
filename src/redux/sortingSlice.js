import { createSlice } from '@reduxjs/toolkit';

export const SORTING = {
  FIRST_DEPARTURE: 'first_departure',
  LAST_DEPARTURE: 'last_departure',
};

const sortingSlice = createSlice({
  name: 'sorting',
  initialState: SORTING.FIRST_DEPARTURE,
  reducers: {
    setSorting: (state, action) => action.payload,
  },
});

export const { setSorting } = sortingSlice.actions;
export default sortingSlice.reducer;
