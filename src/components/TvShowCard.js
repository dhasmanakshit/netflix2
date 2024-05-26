import React from 'react'
import { movieCardImg } from "../utils/constants"
import { useNavigate } from 'react-router-dom'

const TvShowCard = (props) => {
    const navigate = useNavigate()

    const handleTvShowCardClick = () => {
        navigate("/tvshow/" + props.show.id)
    }

    return (
        <div className='w-[150px] ml-6 py-10 cursor-pointer hover:scale-125 transform transition duration-500'
            onClick={handleTvShowCardClick}>
            <img className="rounded-lg" src={movieCardImg + props.show.poster_path} />
            <h5 className='mt-3 text-white font-bold text-sm opacity-80 bottom-0'>{props.show.name}</h5>
        </div>
    )
}

export default TvShowCard