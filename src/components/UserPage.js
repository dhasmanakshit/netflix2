import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { API_fetchUserDetails, api_header_options, movieCardImg } from '../utils/constants';

const UserPage = () => {
    const navigate = useNavigate();

    const user = useSelector((store) => store.user)
    console.log(user)

    const goback = () => { navigate("/browser") }

    const [userdetails, set_userdetails] = useState(null)

    const fetchUserDetails = async () => {
        const res = await fetch(API_fetchUserDetails + user?.uid, api_header_options)
        const json = await res.json()
        set_userdetails(json)
    };

    useEffect(() => { fetchUserDetails() }, [])

    return (
        <div className='bg-black h-[100vh] text-white px-10 '>
            <button onClick={goback} className='bg-red-500 text-white rounded-lg px-3 py-1 mt-10'>⇽ Back</button>
            <div className='flex'>
                <img className='my-10 w-40 mr-10' src={userdetails?.avatar.tmdb.avatar_path
                    ? movieCardImg + userdetails?.avatar.tmdb.avatar_path
                    : "../user_icon.jpg"} />
                <div>
                    <div className='my-10 font-bold'>Username: {userdetails?.username}</div>
                    <div className='my-10 font-bold'>Country: {userdetails?.iso_3166_1}</div>
                    <div className='my-10 font-bold'>UID: {userdetails?.id}</div>
                </div>
            </div>
        </div>
    )
}
export default UserPage