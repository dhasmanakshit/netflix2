import React from 'react'
import TvShowSeasonCard from './TvShowSeasonCard'

const TvShowSeasonsSlider = (props) => {

    return (
        <div className='mt-10 pl-10'>
            <h1 className='pl-7 font-bold text-2xl'>Seasons:</h1>
            <div className='flex overflow-x-scroll overflow-y-hidden scrollbar-hide pr-5'>
                <div className='flex flex-row'>
                    {
                        props.seasons?.map((mov) => mov.poster_path ? <TvShowSeasonCard show={mov} /> : <></>)
                    }
                </div>
            </div>
        </div>
    )
}

export default TvShowSeasonsSlider