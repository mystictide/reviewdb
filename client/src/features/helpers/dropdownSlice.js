import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDropdownState: false,
};

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    resetDropdownState: (state) => {
      state.userDropdownState = false;
    },
    updateUserDropdownState(state) {
      state.userDropdownState = !state.userDropdownState;
    },
  },
});

export const { resetDropdownState, updateUserDropdownState } = dropdownSlice.actions;
export default dropdownSlice.reducer;
