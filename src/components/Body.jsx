import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// for auth
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
// for access to redux's slice's reducer fucntion
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("auth stated changed", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // User is signed out
        // ...
        dispatch(removeUser(user));
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
