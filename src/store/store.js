import { configureStore } from "@reduxjs/toolkit";
import storeSliceReducer from "./storeSlice";
import chipsetSliceReducer from "./chipsetSlice";

export const store = configureStore({
  reducer: {
    myStore: storeSliceReducer,
    chipset: chipsetSliceReducer,
  },
});
