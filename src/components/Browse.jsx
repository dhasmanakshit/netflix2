import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Trailer from "./Trailer";
import { useSelector } from "react-redux";
import Categories from "./Categories";

const Browse = () => {
  // need to add movies in slice & then use it
  // being called in Cate_NowPlaying.js
  // useNowPlayingMovies(); // so no need to call again, mob=vies are already in slice

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  // if (!) return;

  return (
    <div>
      <Header />
      {/* // if there are movies in nowPLaying in slice then render trailer of any random movie*/}
      {nowPlayingMovies ? <Trailer movie={nowPlayingMovies[7]} /> : ""}
      <Categories />
    </div>
  );
};

export default Browse;
