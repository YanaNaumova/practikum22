import { createSlice } from "@reduxjs/toolkit";
import { fetchDogs } from "../thunks";

const dogSlice = createSlice({
  name: "dog",
  initialState: { data: [], status: "idle", error: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDogs.rejected, (state) => {
        state.status = "failed";
        state.error = true;
      });
  },
});

export default dogSlice.reducer;
