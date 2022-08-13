import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {id:2, name: 'Jehad'};

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
