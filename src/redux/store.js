import { configureStore } from "@reduxjs/toolkit";
import dog from "./slices/dogsSlice";

const store = configureStore({
  reducer: {
    dog,
  },
});

export default store;
