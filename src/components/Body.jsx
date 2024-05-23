import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browser",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
