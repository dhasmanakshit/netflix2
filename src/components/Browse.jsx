import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Trailer from "./Trailer";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  // if (!) return;

  return (
    <div>
      <Header />
      {/* // if there are movies in nowPLaying in slice then render trailer of any random movie*/}
      {nowPlayingMovies ? <Trailer movie={nowPlayingMovies[0]} /> : ""}
    </div>
  );
};

export default Browse;
