import { setVoteCounter } from "@/features/voteCountSlice";
import { configureStore } from "@reduxjs/toolkit";
import userAuth from "@/features/userAuthSlice";
const store = configureStore({
  reducer: {
    voteCounter: setVoteCounter,
    user: userAuth,
  },
});
export default store;
