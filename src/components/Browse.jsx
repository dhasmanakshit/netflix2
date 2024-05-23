import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Trailer from "./Trailer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <Trailer />
    </div>
  );
};

export default Browse;
