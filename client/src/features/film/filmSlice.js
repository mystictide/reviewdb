import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FilmService from "./filmService";

const films = null;

const initialState = {
  films: films ? films : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getPopularFilms = createAsyncThunk(
  "film/popular",
  async (thunkAPI) => {
    try {
      return await FilmService.getPopularFilms();
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

export const filmSlice = createSlice({
  name: "film",
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
      .addCase(getPopularFilms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopularFilms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.films = action.payload;
      })
      .addCase(getPopularFilms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.films = null;
      });
  },
});

export const { reset } = filmSlice.actions;
export default filmSlice.reducer;
