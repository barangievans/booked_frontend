import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import bookReducer from './slices/bookSlice';
<<<<<<< HEAD
import cartReducer from './slices/cartSlice';
=======
>>>>>>> temp-branch

const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer,
<<<<<<< HEAD
    cart: cartReducer,
=======
>>>>>>> temp-branch
  },
});

export default store;
