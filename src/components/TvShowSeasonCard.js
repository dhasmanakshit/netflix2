import React from 'react'
import { movieCardImg } from "../utils/constants"

const TvShowSeasonCard = (props) => {
    console.log(props)
    return (
        <div className='w-[150px] ml-6 py-10 cursor-pointer hover:scale-125 transform transition duration-500'>
            <img className="rounded-lg" src={movieCardImg + props.show?.poster_path} />
            <h5 className='mt-3 text-white font-bold text-sm opacity-80 bottom-0'>{props.show?.name}</h5>
        </div>
    )
}

export default TvShowSeasonCard