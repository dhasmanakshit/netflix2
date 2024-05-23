import { api_header_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

// custom_hook to fetch movies via TMDB api 
// & store them in redux


const useNowPlayingMovies = () => {
    // dispatch to add fetched movies list into redix slice
    const dispatch = useDispatch();

    // fetching movies via TMDB api
    const get_now_playing = async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing",
            api_header_options
        );
        const json = await response.json();
        console.log(json);

        // adding them to redux
        dispatch(addNowPlayingMovies(json.results));
    };

    // so that it exe only once 
    useEffect(() => {
        get_now_playing();
    }, []);
}

export default useNowPlayingMovies;