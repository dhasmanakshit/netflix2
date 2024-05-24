import React from 'react'
import MovieCard from './MovieCard'

const MoviesListSlider = (props) => {
    // useNowPlayingMovies();

    // const nowPlaying = useSelector(
    //     (store) => store.movies.nowPlayingMovies
    // );

    return (
        <div className='ml-10'>
            <h1 className='font-bold text-2xl text-white mt-4'>{props.title}</h1>
            <div className='flex overflow-x-scroll overflow-y-hidden scrollbar-hide pr-5'>
                <div className='flex flex-row'>
                    {
                        props.movies?.map((mov) => <MovieCard movie={mov} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default MoviesListSlider