import { configureStore } from "@reduxjs/toolkit";
import dogs from "./slices/dogsSlice";

const store = configureStore({
  reducer: {
    dogs,
  },
});

export default store;
