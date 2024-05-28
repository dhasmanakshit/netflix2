import React from 'react'
import MovieCard from './MovieCard'
import TvShowCard from './TvShowCard'

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
                        props.areMovies
                            ? props.movies?.map((e) => <MovieCard movie={e} key={e.id} />)
                            : props.movies?.map((e) => <TvShowCard show={e} key={e.id} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default MoviesListSlider