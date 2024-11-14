import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
<<<<<<< HEAD
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutSuccess: (state) => {
=======
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    logout(state) {
>>>>>>> temp-branch
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

<<<<<<< HEAD
export const { loginSuccess, logoutSuccess } = authSlice.actions;
=======
export const { setUser, logout } = authSlice.actions;
>>>>>>> temp-branch
export default authSlice.reducer;
