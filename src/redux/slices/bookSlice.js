import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action to fetch books from an API
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks', 
  async () => {
    const response = await fetch('/api/books');  // Replace with your actual API URL
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    return await response.json();  // Return the data to the reducer
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
    status: 'idle',  // could be 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    setBooks: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';  // Set loading state while fetching
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';  // Fetch succeeded
        state.items = action.payload;  // Set fetched books to state
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';  // Fetch failed
        state.error = action.error.message;  // Set error message
      });
  },
});

export const { setBooks } = bookSlice.actions;
export default bookSlice.reducer;
