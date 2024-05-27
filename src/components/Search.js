import React, { useEffect, useRef } from 'react'
import { api_header_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchedToList, emptyList } from '../utils/searchedMoviesSlice';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const searchText = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const fetchedSearchedMovies = useSelector((store) => store.searchedMovies.moviesList)

    const fetchMoviesWithName = async () => {
        const res = await fetch('https://api.themoviedb.org/3/search/movie?query=' + searchText.current.value, api_header_options)
        const json = await res.json()
        console.log(json.results)

        dispatch(addSearchedToList(json.results))
        // console.log(fetchedSearchedMovies)
    }

    const listElementClick = (e) => {
        // navigate()
        const movieId = e.target.getAttribute('movieId')
        // console.log()
        navigate("/movie/" + movieId)
    }

    const clearSearchedMoviesList = () => {
        console.log("clearing list")
        if (fetchedSearchedMovies !== null) dispatch(emptyList())
    }

    return (
        <div className='w-1/3'>
            <div className="mt-10 relative">
                <input type="text" className="mr-2 p-1 w-9/12" ref={searchText} placeholder='Search Movies' onFocus={clearSearchedMoviesList} />
                <button onClick={fetchMoviesWithName}
                    className="bg-red-600 text-white rounded-lg px-3 py-1 font-bold w-2/12">
                    Search
                </button>
            </div>
            {
                fetchedSearchedMovies ?

                    <div className='absolute z-30 text-white '>
                        <ul className='bg-black mt-2'>
                            {fetchedSearchedMovies.map((e) =>
                                <li onClick={listElementClick}
                                    movieId={e.id}
                                    className='rounded-lg cursor-pointer p-2 hover:bg-red-600'>
                                    {e.original_title}
                                </li>)}
                        </ul>
                    </div>

                    : <></>
            }

        </div >
    )
}

export default Search