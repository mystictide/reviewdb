import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModalState: false,
  registryModalState: false,
};

export const accountModalSlice = createSlice({
  name: "accountModal",
  initialState,
  reducers: {
    resetState: (state) => {
      state.registryModalState = false;
      state.loginModalState = false;
    },
    updateLogin(state) {
      state.loginModalState = !state.loginModalState;
    },
    updateRegistry(state) {
      state.registryModalState = !state.registryModalState;
    },
  },
});

export const { resetState, updateLogin, updateRegistry } = accountModalSlice.actions;
export default accountModalSlice.reducer;
