import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import filmReducer from "../features/film/filmSlice";
import musicReducer from "../features/music/musicSlice";
import gameReducer from "../features/game/gameSlice";
import paintingReducer from "../features/art/paintingSlice";
import poemReducer from "../features/art/poemSlice";
import bookReducer from "../features/book/bookSlice";
import loginmodalReducer from "../features/helpers/loginmodalSlice";
import registrymodalReducer from "../features/helpers/registrymodalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    film: filmReducer,
    music: musicReducer,
    game: gameReducer,
    painting: paintingReducer,
    poem: poemReducer,
    book: bookReducer,
    loginModal: loginmodalReducer,
    registryModal: registrymodalReducer,
  },
});
