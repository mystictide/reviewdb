import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BookService from "./bookService";

const books = null;

const initialState = {
  books: books ? books : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getRandomBooks = createAsyncThunk(
  "book/random",
  async (thunkAPI) => {
    try {
      return await BookService.getRandomBooks();
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

export const bookSlice = createSlice({
  name: "book",
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
      .addCase(getRandomBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRandomBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = action.payload;
      })
      .addCase(getRandomBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.books = null;
      });
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
