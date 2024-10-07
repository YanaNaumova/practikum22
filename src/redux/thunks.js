import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDogs = createAsyncThunk("dog/fetchDogs", async () => {
  const response = await axios.get(`https://api.thedogapi.com/v1/breeds`);
  return response.data;
});
