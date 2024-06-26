import React, { useEffect, useState } from "react";
// to navigate to diff url from app_code
import { useNavigate } from "react-router-dom";
// for auth
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
// for access to redux's slice's reducer fucntion
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate();
  // reading user obj from redux, by subscribing
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log("auth stated changed", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser(user));
        navigate("/");
      }
    });
  }, []);

  const [hiddenornot, set_hiddenornot] = useState("hidden");
  const expandOptions = () => {
    hiddenornot ? set_hiddenornot("") : set_hiddenornot("hidden");
  };

  const openUserPage = () => {
    navigate("/user");
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log("signed out, check in redux tool in browser");
        // user_remove will done on_auth_change() in <Header/>
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex justify-between">
      <div className="logo w-44 ml-7 mt-5">
        <img src="../netflix_logo.png" />
      </div>

      {user ? <Search /> : ""}

      {/* render only if user_from_redux is not null */}
      {user ? (
        <div
          className="mt-10 mr-10 relative cursor-pointer"
          onClick={expandOptions}
        >
          <img src="../user_icon.jpg" className="w-10 ml-auto my-auto" />

          <div
            className={"absolute z-20 top-12 right-0 " + hiddenornot}
            id="abc"
          >
            <ul className=" text-white bg-white bg-opacity-20 font-bold text-lg rounded-lg flex flex-col">
              <li
                className="rounded-lg text-center p-2 hover:bg-red-600 hover:bg-opacity-80"
                onClick={openUserPage}
              >
                {user.email}
              </li>
              <li className="rounded-lg text-center p-2 hover:bg-red-600 hover:bg-opacity-80 ">
                Other Users
              </li>
              <li
                className="rounded-lg text-center p-2 hover:bg-red-600 hover:bg-opacity-80 "
                onClick={handleSignOut}
              >
                Sign Out
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
