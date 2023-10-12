import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSongs(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetSongs(state, action) {
      state.length = 0;
    }
  }
});

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetMovies(state, action) {
      state.length = 0;
    }
  }
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: movieSlice.reducer
  }
});

export { store };
export const { addSong, removeSongs, resetSongs } = songsSlice.actions;
export const { addMovie, removeMovie, resetMovies } = movieSlice.actions;
