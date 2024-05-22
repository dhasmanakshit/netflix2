import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  // reading user obj from redux, by subscribing
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signed out, check in redux tool in browser");
        navigate("/");
        // user_remove will done on_auth_change() in <Body/>
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex justify-between">
      <div className="logo w-44">
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
      </div>

      {/* render only if user_from_redux is not null */}
      {user ? (
        <div className="flex">
          <img
            src="../user_icon.jpg"
            className="w-10 rounded-full ml-auto my-auto"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white font-bold text-xl mx-5 my-auto p-2 rounded-lg"
          >
            Sign Out
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
