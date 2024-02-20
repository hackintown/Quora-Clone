import { setVoteCounter } from "@/features/voteCountSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    voteCounter: setVoteCounter,
  },
});
export default store;
