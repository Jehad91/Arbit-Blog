import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = false;

export const isOpenSlice = createSlice({
  name: 'isOpen',
  initialState: {value: initialStateValue},
  reducers: {
    setIsOpen: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setIsOpen } = isOpenSlice.actions;
export default isOpenSlice.reducer;
