import { createSlice } from "@reduxjs/toolkit";
const voteCountSlice = createSlice({
  name: "voteCounter",
  initialState: { value: 0 },
  reducers: {
    setVoteCounter: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setVoteCounter } = voteCountSlice.actions;
export default voteCountSlice.reducer;
