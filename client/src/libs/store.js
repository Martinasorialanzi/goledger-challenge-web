import { configureStore } from "@reduxjs/toolkit";
import { songSlices } from "./features/songSlices";
import { artistSlices } from "./features/artistSlices";
import { albumSlices } from "./features/albumSlices";
import { playlistSlices } from "./features/playlistSlices";

export const store = configureStore({
  reducer: {
    [songSlices.reducerPath]: songSlices.reducer,
    [artistSlices.reducerPath]: artistSlices.reducer,
    [albumSlices.reducerPath]: albumSlices.reducer,
    [playlistSlices.reducerPath]: playlistSlices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      songSlices.middleware,
      artistSlices.middleware,
      albumSlices.middleware,
      playlistSlices.middleware
    ),
});

