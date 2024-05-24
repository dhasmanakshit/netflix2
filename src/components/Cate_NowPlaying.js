import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Cate_NowPlaying = () => {
    useNowPlayingMovies();

    const nowPlaying = useSelector(
        (store) => store.movies.nowPlayingMovies
    );

    return (
        <div className='flex overflow-x-scroll scrollbar-hide bg-black p-5'>
            <h1 className='mx-10 font-bold text-2xl text-red-700'>Now Playing Movies</h1>
            <div className='flex flex-row'>
                {
                    nowPlaying?.map((mov) => <MovieCard movie={mov} />)
                }
            </div>
        </div >
    )
}

export default Cate_NowPlaying