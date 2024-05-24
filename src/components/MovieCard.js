import React from 'react'
import { movieCardImg } from "../utils/constants"

const MovieCard = (props) => {
    return (
        <div className='w-[150px] mr-5 cursor-pointer'>
            <img className="rounded-lg" src={movieCardImg + props.movie.backdrop_path} />
            <h5 className='mt-3 text-white font-bold bottom-0'>{props.movie.title}</h5>
        </div>
    )
}

export default MovieCard