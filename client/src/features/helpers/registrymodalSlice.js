import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registryModalState: false,
};

export const registrymodalSlice = createSlice({
  name: "registryModal",
  initialState,
  reducers: {
    reset: (state) => {
      state.registryModalState = false;
    },
    update(state) {
      state.registryModalState = !state.registryModalState;
    },
  },
});

export const { reset, update } = registrymodalSlice.actions;
export default registrymodalSlice.reducer;
