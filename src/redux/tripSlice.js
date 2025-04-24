import { createSlice } from '@reduxjs/toolkit';

const initialState = [{}];

const tripSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
  },
});

export const { addTrip } = tripSlice.actions;
export default tripSlice.reducer;
