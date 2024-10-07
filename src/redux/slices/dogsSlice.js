import { createSlice } from "@reduxjs/toolkit";
import { fetchBreeds } from "../thunks";

const dogSlice = createSlice({
  name: "dog",
  initialState: { data: [], status: "idle", error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        console.log(state.data);
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log(state.error);
      });
  },
});

export default dogSlice.reducer;
