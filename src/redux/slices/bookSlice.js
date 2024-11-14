<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';
=======
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('/api/books'); // Make sure this API is correct
  return response.data;
});
>>>>>>> temp-branch

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
    status: 'idle',
  },
<<<<<<< HEAD
  reducers: {
    setBooks: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setBooks } = bookSlice.actions;
=======
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

>>>>>>> temp-branch
export default bookSlice.reducer;
