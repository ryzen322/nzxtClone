import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../components/axios/axios";

export const fetchCartData = createAsyncThunk("cart/fetchData", async () => {
  const { data } = await instance("parts.json");

  return data.itemParts;
});

export const partsSlice = createSlice({
  name: "parts",
  initialState: {
    pcParts: [],
    loading: true,
    reject: false,
    success: false,
  },
  extraReducers: {
    [fetchCartData.loading]: (state, action) => {
      state.loading = true;
      state.success = false;
      state.reject = false;
      state.pcParts = action.payload;
    },
    [fetchCartData.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.reject = false;
      state.pcParts = action.payload;
    },
    [fetchCartData.rejected]: (state, action) => {
      state.loading = true;
      state.success = false;
      state.reject = true;
      state.pcParts = action.payload;
    },
  },
});

export default partsSlice.reducer;
