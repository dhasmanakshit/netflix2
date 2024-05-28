import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_fetchTvShowDetails, api_header_options, movieCardImg } from '../utils/constants';
import TvShowSeasonsSlider from './TvShowSeasonsSlider';

const TvShowPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [tvshowDetails, set_tvshowDetails] = useState(null)

    // cant use hook cuz we need to send params.id 
    // [react will initialize hook as soon as app start, wont wait to be in this page ]
    const fetchtvshowDetail = async (id) => {
        const res = await fetch(API_fetchTvShowDetails + id, api_header_options)
        const json = await res.json()
        // console.log(json)
        set_tvshowDetails(json)
    }
    useEffect(() => {
        fetchtvshowDetail(params.id)
    }, [])

    const goback = () => { navigate("/browser") }

    return (
        tvshowDetails ?
            <div className='relative bg-black text-white'>
                <img src={movieCardImg + tvshowDetails.backdrop_path} className='opacity-15' />

                <div className='overlay absolute top-0 w-full'>
                    <div className='flex'>
                        <div className='w-1/2 px-20 '>
                            <button onClick={goback} className='bg-red-500 text-white rounded-lg px-3 py-1 mt-10'>⇽ Back</button>

                            <div className='mt-10 flex items-center'>
                                <div className=''>
                                    <img src={movieCardImg + tvshowDetails.poster_path} className='rounded-xl bordered border-2 border-white w-40' alt='movie Img' />
                                </div>

                                <div className='ml-20'>
                                    <h2 className='text-6xl font-bold '>{tvshowDetails.name}</h2>
                                    <h2 className='mt-5'>Seasons: {tvshowDetails.number_of_seasons}</h2>
                                </div>
                            </div>

                            <div className='mt-5 pl-5'>
                                <h2>{tvshowDetails.vote_average}⭐️  ({tvshowDetails.vote_count})</h2>
                            </div>

                        </div>

                        <div className='w-1/2 mt-20 px-20 '>
                            <div className='mt-10 text-lg'>{tvshowDetails.overview}</div>

                            <div className='my-10'><span className='font-bold text-lg'>Genre: </span>{tvshowDetails.genres.map((e) => e.name + ", ")}</div>

                            <div>Aired On: <span className='font-bold text-lg'>{tvshowDetails.first_air_date}</span></div>

                            <div>Available In Languages: {tvshowDetails.spoken_languages.map((e) => e.name + ", ")}</div>
                        </div>
                    </div>

                    <div className='overflow-x-scroll overflow-y-hidden scrollbar-hide'>
                        <TvShowSeasonsSlider seasons={tvshowDetails.seasons} />
                    </div>
                </div >
            </div >
            : <h2 className='text-center mt-20 text-2xl text-red-500'>Loading Details...</h2>
    )
}
export default TvShowPage