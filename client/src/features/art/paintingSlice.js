import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PaintingService from "./paintingService";

const paintings = null;

const initialState = {
  paintings: paintings ? paintings : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getRandomPaintings = createAsyncThunk(
  "art/paintings/random",
  async (thunkAPI) => {
    try {
      return await PaintingService.getRandomPaintings();
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

export const paintingSlice = createSlice({
  name: "painting",
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
      .addCase(getRandomPaintings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRandomPaintings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.paintings = action.payload;
      })
      .addCase(getRandomPaintings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.paintings = null;
      });
  },
});

export const { reset } = paintingSlice.actions;
export default paintingSlice.reducer;
