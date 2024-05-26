import React from 'react'
import { movieCardImg } from "../utils/constants"
import { useNavigate } from 'react-router-dom';
import MoviePage from './MoviePage';

const MovieCard = (props) => {
    const navigate = useNavigate();
    const handleMovieCardClick = () => {
        navigate("/movie/" + props.movie.id)
    }

    return (
        <div className='w-[150px] ml-6 py-10 cursor-pointer hover:scale-125 transform transition duration-500'
            onClick={handleMovieCardClick}>
            <img className="rounded-lg" src={movieCardImg + props.movie.poster_path} />
            <h5 className='mt-3 text-white font-bold text-sm opacity-80 bottom-0'>{props.movie.title}</h5>
        </div>
    )
}

export default MovieCard