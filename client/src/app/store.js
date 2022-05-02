import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import filmReducer from "../features/film/filmSlice";
import musicReducer from "../features/music/musicSlice";
import gameReducer from "../features/game/gameSlice";
import paintingReducer from "../features/art/paintingSlice";
import poemReducer from "../features/art/poemSlice";
import bookReducer from "../features/book/bookSlice";
import accountModalReducer from "../features/helpers/accountModalSlice";
import dropdownReducer from "../features/helpers/dropdownSlice";
import validationReducer from "../features/auth/validationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    film: filmReducer,
    music: musicReducer,
    game: gameReducer,
    painting: paintingReducer,
    poem: poemReducer,
    book: bookReducer,
    accountModal: accountModalReducer,
    dropdown: dropdownReducer,
    validation: validationReducer,
  },
});
