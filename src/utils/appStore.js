import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
import searchedReducer from "./searchedMoviesSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        searchedMovies: searchedReducer,
    }
})

export default appStore;
