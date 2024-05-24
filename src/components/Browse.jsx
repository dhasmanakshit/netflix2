import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Trailer from "./Trailer";
import { useSelector } from "react-redux";
import Categories from "./Categories";

const Browse = () => {
  // need to add movies in slice & then use it
  // being called in categories.js
  // useNowPlayingMovies(); // so no need to call again, movies are already in slice

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  // random number generotor for random trailer
  const randomNumUnder = () => {
    return Math.floor(Math.random() * nowPlayingMovies.length);
  };

  return (
    <div className="bg-black">
      <Header />
      {/* // if there are movies in nowPLaying in slice then render trailer of any random movie*/}
      {nowPlayingMovies ? (
        <Trailer movie={nowPlayingMovies[randomNumUnder()]} />
      ) : (
        ""
      )}
      <Categories />
    </div>
  );
};

export default Browse;
