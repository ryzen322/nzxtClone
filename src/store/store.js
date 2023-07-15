import { configureStore } from "@reduxjs/toolkit";
import storeSliceReducer from "./storeSlice";
import chipsetSliceReducer from "./chipsetSlice";
import pcPartSliceReducer from "./partsSlice";

export const store = configureStore({
  reducer: {
    myStore: storeSliceReducer,
    chipset: chipsetSliceReducer,
    pcParts: pcPartSliceReducer,
  },
});
