import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api_header_options, movieCardImg } from '../utils/constants';
import Header from './Header';
import MovieCard from './MovieCard';

const MoviePage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [movieDetails, set_movieDetails] = useState(null)

    // cant use hook cuz we need to send params.id 
    // [react will initialize hook as soon as app start, wont wait to be in this page ]
    const fetchMovieDetail = async (id) => {
        const res = await fetch("https://api.themoviedb.org/3/movie/" + id, api_header_options)
        const json = await res.json()
        console.log(json)
        set_movieDetails(json)
    }
    useEffect(() => {
        fetchMovieDetail(params.id)
    }, [])

    const goback = () => { navigate("/browser") }

    return (
        movieDetails ?
            <div className='relative bg-black text-white'>
                <img src={movieCardImg + movieDetails.backdrop_path} className='opacity-20' />

                <div className='absolute top-0 w-full px-20 '>
                    <button onClick={goback} className='bg-red-500 text-white rounded-lg px-3 py-1 mt-10'>⇽ Back</button>

                    <div className='mt-20 flex items-center'>
                        <div className=''>
                            <img src={movieCardImg + movieDetails.poster_path} className='rounded-xl bordered border-2 border-white w-40' />
                        </div>

                        <div className='ml-20'>
                            <h2 className='text-6xl font-bold '>{movieDetails.title}</h2>
                            <h2 className='italic mt-5 mb-10'>"{movieDetails.tagline}"</h2>
                            <h2 className=''>Duration: {Math.floor(movieDetails.runtime / 60)}hr {movieDetails.runtime % 60}min</h2>
                        </div>
                    </div>

                    <div className='my-10 pl-5'>
                        <h2>{movieDetails.vote_average}⭐️  ({movieDetails.vote_count})</h2>
                    </div>

                    <div className='mt-10 w-1/2 text-lg'>{movieDetails.overview}</div>

                    <div className='my-10'><span className='font-bold text-lg'>Genre: </span>{movieDetails.genres.map((e) => e.name + ", ")}</div>

                    <div>Release Date: <span className='font-bold text-lg'>{movieDetails.release_date}</span></div>

                    <div>Available In: {movieDetails.spoken_languages.map((e) => e.name + ", ")}</div>
                </div>

            </div >
            : <h2>Loading Details...</h2>
    )
}
export default MoviePage