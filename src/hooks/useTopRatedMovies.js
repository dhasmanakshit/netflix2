import { api_header_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

// custom_hook to fetch movies via TMDB api 
// & store them in redux


const useTopRatedMovies = () => {
    // dispatch to add fetched movies list into redix slice
    const dispatch = useDispatch();

    // fetching movies via TMDB api
    const get_top_rated = async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated",
            api_header_options
        );
        const json = await response.json();
        console.log(json);

        // adding them to redux
        dispatch(addTopRatedMovies(json.results));
    };

    // so that it exe only once 
    useEffect(() => {
        get_top_rated();
    }, []);
}

export default useTopRatedMovies;