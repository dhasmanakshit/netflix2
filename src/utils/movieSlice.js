import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        topRatedMovies: null,
        popularTV: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addPopularTV: (state, action) => {
            state.popularTV = action.payload;
        }
    }
})
export const { addNowPlayingMovies, addTopRatedMovies, addPopularTV } = movieSlice.actions;
export default movieSlice.reducer;