import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {
    setBooks: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setBooks } = bookSlice.actions;
export default bookSlice.reducer;
