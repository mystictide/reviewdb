import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MusicService from "./musicService";

const artists = null;

const initialState = {
  artists: artists ? artists : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getPopularArtists = createAsyncThunk(
  "music/popular",
  async (thunkAPI) => {
    try {
      return await MusicService.getPopularArtists();
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

export const musicSlice = createSlice({
  name: "music",
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
      .addCase(getPopularArtists.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopularArtists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.artists = action.payload;
      })
      .addCase(getPopularArtists.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.artists = null;
      });
  },
});

export const { reset } = musicSlice.actions;
export default musicSlice.reducer;
