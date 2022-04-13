import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import filmReducer from "../features/film/filmSlice";
import musicReducer from "../features/music/musicSlice";
import gameReducer from "../features/game/gameSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    film: filmReducer,
    music: musicReducer,
    game: gameReducer,
  },
});
