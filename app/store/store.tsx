"use client";
import voteCountReducer from "@/features/voteCountSlice";
import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "@/features/userAuthSlice";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
const store = configureStore({
  reducer: {
    voteCounter: voteCountReducer,
    userAuth: userAuthReducer,
  },
});
export default store;
