import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [usrnm, set_usrnm] = useState("");
  const [pswrd, set_pswrd] = useState("");

  const [already_user, set_already_user] = useState(true);
  const toggleFunc = () => {
    set_already_user(!already_user);
  };

  return (
    <div
      style={{
        backgroundImage: "url(../netflix_bg.jpeg)",
        padding: "5rem 0 10rem 0",
      }}
    >
      <Header />
      <form className="bg-black bg-opacity-80 flex flex-col text-white w-4/12 mx-auto p-12 ">
        <h1>{already_user ? "Sign in" : "Enter Details"}</h1>
        <input
          type="text"
          className="border p-2 my-4 w-10/12"
          placeholder="Username"
        />
        <input
          type="password"
          className="border p-2 my-4 w-10/12"
          placeholder="Password"
        />
        {already_user ? (
          ""
        ) : (
          <input
            type="password"
            className="border p-2 my-4 w-10/12"
            placeholder="Re-enter Password"
          />
        )}
        <button
          type="submit"
          className="p-2 my-4 cursor-pointer bg-red-700 w-10/12"
        >
          {already_user ? "Sign in" : "Create New Account"}
        </button>

        <p className="cursor-pointer" onClick={toggleFunc}>
          {already_user ? "New to Netflix? Sign Up" : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
