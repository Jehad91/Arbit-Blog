import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {value: initialStateValue},
  reducers: {
    setPosts: (state, action) => {
      state.value = action.payload;
    }
  }
});
export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
