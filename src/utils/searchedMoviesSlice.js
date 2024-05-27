import { createSlice } from "@reduxjs/toolkit";

const searchedMoviesSlice = createSlice({
    name: "searchedMovies",
    initialState: {
        moviesList: null
    },
    reducers: {
        addSearchedToList: (state, action) => {
            state.moviesList = action.payload
        },
        emptyList: (state) => {
            state.moviesList.length = 0
        },
    }
})

export const { addSearchedToList, emptyList } = searchedMoviesSlice.actions
export default searchedMoviesSlice.reducer;