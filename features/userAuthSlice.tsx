"use client";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/store";
const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: true, // Added loading state
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { loginSuccess, logoutSuccess, setLoading } =
  userAuthSlice.actions;
// Selectors
export const selectUser = (state: RootState) => state.userAuth.user;
export const selectIsAuthenticated = (state: RootState) =>
  state.userAuth.isAuthenticated;
export const selectLoading = (state: RootState) => state.userAuth.loading;
export default userAuthSlice.reducer;
