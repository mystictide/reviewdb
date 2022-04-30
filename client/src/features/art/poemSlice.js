import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PoemService from "./poemService";

const poems = null;

const initialState = {
  poems: poems ? poems : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getRandomPoems = createAsyncThunk(
  "art/poems/random",
  async (thunkAPI) => {
    try {
      return await PoemService.getRandomPoems();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const poemSlice = createSlice({
  name: "poem",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRandomPoems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRandomPoems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.poems = action.payload;
      })
      .addCase(getRandomPoems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.poems = null;
      });
  },
});

export const { reset } = poemSlice.actions;
export default poemSlice.reducer;
