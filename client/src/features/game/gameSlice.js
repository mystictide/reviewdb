import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GameService from "./gameService";

const games = null;

const initialState = {
  games: games ? games : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getPopularGames = createAsyncThunk(
  "game/popular",
  async (thunkAPI) => {
    try {
      return await GameService.getPopularGames();
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

export const gameSlice = createSlice({
  name: "game",
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
      .addCase(getPopularGames.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopularGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.games = action.payload;
      })
      .addCase(getPopularGames.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.games = null;
      });
  },
});

export const { reset } = gameSlice.actions;
export default gameSlice.reducer;
