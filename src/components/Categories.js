import React from 'react'
import MoviesListSlider from './MoviesListSlider'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularTV from '../hooks/usePopularTV'

const Categories = () => {
    // calling hooks so that they can fetch from api 
    // & then hook will call reducers to store movies in redux_slice
    useNowPlayingMovies();
    useTopRatedMovies();
    usePopularTV();

    // subscribing to data in slice
    const movie_whole_redux = useSelector(
        (store) => store.movies
    );

    return (
        <div className='relative -mt-60'>
            <MoviesListSlider title={"Now Playing"} movies={movie_whole_redux.nowPlayingMovies} areMovies={true} />
            <MoviesListSlider title={"Top Rated"} movies={movie_whole_redux.topRatedMovies} areMovies={true} />
            <MoviesListSlider title={"Popular TV Shows"} movies={movie_whole_redux.popularTV} areMovies={false} />
        </div>
    )
}

export default Categories