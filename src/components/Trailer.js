import React, { useEffect, useState } from 'react'
import { API_fetchMovieDetails, YoutubeIframe, api_header_options, youtubeEmbed, youtubeEmbedControls } from '../utils/constants'

const Trailer = (props) => {
    // console.log(props.movie) // fetch trsiler for this id

    const [moreinfo, set_moreinfo] = useState(false)
    const [trailer, set_trailer] = useState()

    // we can do this in custom_hook aswell, & store the trailer in slice
    const fetchMovieTrailer = async () => {
        const response = await fetch(API_fetchMovieDetails + props.movie.id + '/videos', api_header_options)
        const json = await response.json()

        // console.log('all videos', json)
        const trailers = json?.results.filter(mov => mov.type === "Trailer")
        // console.log('trailers', trailers)
        set_trailer(trailers[0])
        // console.log('random selected trailer', trailer)
    }

    useEffect(() => {
        fetchMovieTrailer()
    }, [])

    return (
        <div className='relative'>
            <div className='trailer_video w-full overflow-hidden pointer-events-none'>
                <iframe title={trailer?.key} className='w-screen aspect-video'
                    src={youtubeEmbed + trailer?.key + youtubeEmbedControls}></iframe>
            </div>
            <div className='absolute z-1 top-0 pb-32 pl-10 bg-gradient-to-r from-black w-1/2 h-full flex flex-col pt-40'>
                <h1 className='text-white text-6xl font-bold '>{props.movie.title}</h1>
                {
                    moreinfo ? <p className='text-gray-300 text-xl font-bold mt-6'>{props.movie.overview}</p> : ""
                }
                <div className='py-5'>
                    <button className='text-xl bg-white bg-opacity-20 text-white rounded-lg py-2 px-5 mr-5 hover:bg-red-600'>Play ▶️</button>
                    <button className='text-xl bg-white bg-opacity-20 text-white rounded-lg py-2 px-5 hover:bg-opacity-50'
                        onClick={() => set_moreinfo(!moreinfo)}>{moreinfo ? "Less Info ⏷" : "More Info ℹ"}</button>
                </div>
            </div>

        </div >
    )
}

export default Trailer