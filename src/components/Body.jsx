import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import Header from "./Header";
import MoviePage from "./MoviePage";
import UserPage from "./UserPage";
import TvShowPage from "./TvShowPage";

const Body = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browser",
      element: <Browse />,
    },
    {
      path: "movie/:id",
      element: <MoviePage />,
    },
    {
      path: "tvshow/:id",
      element: <TvShowPage />,
    },
    {
      path: "user",
      element: <UserPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
