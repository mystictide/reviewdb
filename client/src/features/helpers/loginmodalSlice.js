import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModalState: false,
};

export const loginmodalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    reset: (state) => {
      state.loginModalState = false;
    },
    update(state) {
      state.loginModalState = !state.loginModalState;
    },
  },
});

export const { reset, update } = loginmodalSlice.actions;
export default loginmodalSlice.reducer;
