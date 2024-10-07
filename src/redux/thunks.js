import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBreeds = createAsyncThunk("breeds/fetchBreeds", async () => {
  const response = await axios.get(`https://api.thedogapi.com/v1/breeds`);
  console.log(response.data);
  return response.data;
});
