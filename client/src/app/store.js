import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import filmReducer from "../features/film/filmSlice";
import musicReducer from "../features/music/musicSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    film: filmReducer,
    music: musicReducer,
  },
});
