// Actions

import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface GlobalState {}

// Define the initial state using that type
const initialState: GlobalState = {};

// Global slice
export const globalSlice = createSlice({
  name: 'global',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setABC: () => {},
  },
});

export const { setABC } = globalSlice.actions;

export default globalSlice.reducer;
