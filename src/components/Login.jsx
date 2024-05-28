import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/validate";

import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  // for ref to input element
  const email = useRef(null);
  const pswrd = useRef(null);
  const re_pswrd = useRef(null);

  // to toggle btween sign-in sign-up
  const [already_user, set_already_user] = useState(true);
  const toggleFunc = () => {
    set_already_user(!already_user);
  };

  // to render err_msg (if any)
  const [err_msg, set_err_msg] = useState(null);
  // validate inputs - LOGIN (re-enter feild wont be there so)
  const validateInput = () => {
    var res = "def_err_dont_login";
    already_user === true
      ? (res = Validate(
          email.current.value,
          pswrd.current.value,
          pswrd.current.value
        ))
      : (res = Validate(
          email.current.value,
          pswrd.current.value,
          re_pswrd.current.value
        ));

    set_err_msg(res);

    if (res === null) {
      // --- if NO_ERR, proceed to sign-in/sign-up
      if (already_user) {
        // --- sign in
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          pswrd.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // console.log("user valid, signed in");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            set_err_msg("Invalid Credentials");
          });
      } else {
        // --- sign up
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          pswrd.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            set_err_msg(errorCode + " : " + errorMessage);
          });
      }
    } else return;
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(../netflix_bg.jpeg), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)",
        backgroundBlendMode: "overlay",
        padding: "3rem 0 10rem 0",
      }}
    >
      <Header />
      <form
        className="bg-black bg-opacity-70 flex flex-col w-4/12 mx-auto p-12 mt-20"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white">
          {already_user ? "Sign in" : "Enter Details"}
        </h1>
        <input
          ref={email}
          type="text"
          className="border p-2 my-4 w-10/12"
          placeholder="Email"
        />
        <input
          ref={pswrd}
          type="password"
          className="border p-2 my-4 w-10/12"
          placeholder="Password"
        />
        {already_user ? (
          ""
        ) : (
          <input
            ref={re_pswrd}
            type="password"
            className="border p-2 my-4 w-10/12"
            placeholder="Re-enter Password"
          />
        )}
        <button
          type="submit"
          className="p-2 my-4 cursor-pointer text-white  bg-red-700 w-10/12"
          onClick={validateInput}
        >
          {already_user ? "Sign in" : "Create New Account"}
        </button>
        <p className="text-red-400 my-5"> {err_msg}</p>
        <p className="cursor-pointer text-blue-400" onClick={toggleFunc}>
          {already_user ? "New to Netflix? Sign Up" : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
