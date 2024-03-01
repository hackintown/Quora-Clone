"use client";
import { setVoteCounter } from "@/features/voteCountSlice";
import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "@/features/userAuthSlice";
export type RootState = ReturnType<typeof store.getState>;
const store = configureStore({
  reducer: {
    voteCounter: setVoteCounter,
    userAuth: userAuthReducer,
  },
});
export default store;
