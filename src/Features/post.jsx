import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {};

export const postSlice = createSlice({
  name: 'post',
  initialState: {value: initialStateValue},
  reducers: {
    setPost: (state, action) => {
      state.value = action.payload;
    }
  }
});
export const { setPost } = postSlice.actions;
export default postSlice.reducer;
