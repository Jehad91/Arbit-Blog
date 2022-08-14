import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {id:1, name: 'Jehad'};

export const userSlice = createSlice({
  name: 'user',
  initialState: {value: initialStateValue},
  reducers: {
    setUser: (state) => {
      state.value = initialStateValue;
    }
  }
});

export default userSlice.reducer;
