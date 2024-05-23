import React, { useEffect } from "react";
// to navigate to diff url from app_code
import { useNavigate } from "react-router-dom";
// for auth
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
// for access to redux's slice's reducer fucntion
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  // reading user obj from redux, by subscribing
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("auth stated changed", user);
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

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signed out, check in redux tool in browser");
        // user_remove will done on_auth_change() in <Header/>
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
