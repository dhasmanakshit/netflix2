import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api_header_options, movieCardImg } from '../utils/constants';

const TvShowPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [tvshowDetails, set_tvshowDetails] = useState(null)

    // cant use hook cuz we need to send params.id 
    // [react will initialize hook as soon as app start, wont wait to be in this page ]
    const fetchtvshowDetail = async (id) => {
        const res = await fetch("https://api.themoviedb.org/3/tv/" + id, api_header_options)
        const json = await res.json()
        console.log(json)
        set_tvshowDetails(json)
    }
    useEffect(() => {
        fetchtvshowDetail(params.id)
    }, [])

    const goback = () => { navigate("/browser") }

    return (
        tvshowDetails ?
            <div className='relative bg-black text-white'>
                <img src={movieCardImg + tvshowDetails.backdrop_path} className='opacity-20' />

                <div className='absolute top-0 w-full px-20 '>
                    <button onClick={goback} className='bg-red-500 text-white rounded-lg px-3 py-1 mt-10'>⇽ Back</button>

                    <div className='mt-20 flex items-center'>
                        <div className=''>
                            <img src={movieCardImg + tvshowDetails.poster_path} className='rounded-xl bordered border-2 border-white w-40' />
                        </div>

                        <div className='ml-20'>
                            <h2 className='text-6xl font-bold '>{tvshowDetails.name}</h2>
                            <h2 className='mt-5'>Seasons: {tvshowDetails.number_of_seasons}</h2>
                        </div>
                    </div>

                    <div className='my-10 pl-5'>
                        <h2>{tvshowDetails.vote_average}⭐️  ({tvshowDetails.vote_count})</h2>
                    </div>

                    <div className='mt-10 w-1/2 text-lg'>{tvshowDetails.overview}</div>

                    <div className='my-10'><span className='font-bold text-lg'>Genre: </span>{tvshowDetails.genres.map((e) => e.name + ", ")}</div>

                    <div>Aired On: <span className='font-bold text-lg'>{tvshowDetails.first_air_date}</span></div>

                    <div>Available In Languages: {tvshowDetails.spoken_languages.map((e) => e.name + ", ")}</div>
                </div>

            </div >
            : <h2>Loading Details...</h2>
    )
}
export default TvShowPage