import { createSlice, current } from "@reduxjs/toolkit";

export const chipseSlice = createSlice({
  name: "chipset",
  initialState: {
    value: true,
  },
  reducers: {
    toggleStateChipset: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export const { toggleStateChipset } = chipseSlice.actions;

export default chipseSlice.reducer;
