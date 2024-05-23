import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { api_header_options } from '../utils/constants'

const Trailer = () => {
    const [moreinfo, set_moreinfo] = useState(false)
    const [trailer, set_trailer] = useState()

    const movies = useSelector((store) => store.movies.nowPlayingMovies)

    const fetchMovieTrailer = async () => {

        const response = await fetch('https://api.themoviedb.org/3/movie/823464/videos', api_header_options)
        const json = await response.json()

        console.log('all videos', json)
        const trailers = json?.results.filter(movie => movie.type === "Trailer")
        console.log('trailers', trailers)
        set_trailer(trailers[0])
        console.log('random selected trailer', trailer)
    }

    useEffect(() => {
        fetchMovieTrailer()
    }, [])

    if (movies === null) return

    return (
        <div className=''>
            <div className='trailer_video absolute -z-10 w-full h-full'>
                <iframe className='w-full h-full' src={"https://www.youtube.com/embed/" + trailer?.key}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </div>
            <div className=''>
                <h1 className='text-gray-900 text-6xl font-bold pt-80 px-10'>{movies[0].title}</h1>
                {
                    moreinfo ? <p className='text-gray-600 text-xl font-bold mt-6 w-6/12'>{movies[0].overview}</p> : ""
                }
            </div>
            <div className='mt-5'>
                <button className='text-xl bg-slate-500 text-white rounded-lg py-2 px-5 mr-5 hover:bg-red-600'>Play</button>
                <button className='text-xl bg-slate-500 text-white rounded-lg py-2 px-5 hover:bg-slate-800'
                    onClick={() => set_moreinfo(!moreinfo)}>{moreinfo ? "Less Info" : "More Info"}</button>
            </div>
        </div >
    )
}

export default Trailer