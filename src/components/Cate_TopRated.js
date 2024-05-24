import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import useTopRatedMovies from '../hooks/useTopRatedMovies';

const Cate_TopRated = () => {
    useTopRatedMovies();

    const nowPlaying = useSelector(
        (store) => store.movies.topRatedMovies
    );

    return (
        <div className='flex overflow-x-scroll scrollbar-hide bg-black p-5'>
            <h1 className='mx-10 font-bold text-2xl text-red-700'>Top Rated Movies</h1>
            <div className='flex flex-row'>
                {
                    nowPlaying?.map((mov) => <MovieCard movie={mov} />)
                }
            </div>
        </div >
    )
}

export default Cate_TopRated