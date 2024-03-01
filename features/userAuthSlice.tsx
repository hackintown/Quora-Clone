import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  error: string | null;
}
// Define types for user
interface User {
  id: number;
  name: string;
  email: string;
}
const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  error: null,
};
const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setLoginSuccess: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
      state.user = null;
      state.error = null;
    },
    setLoginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});
export const { setLoginSuccess, setLoginFailure, setLogout } =
  userAuthSlice.actions;
export default userAuthSlice.reducer;
