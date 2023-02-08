import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { API_ROUTES, APP_ROUTES } from "../utils/constants";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "./../contexts/AuthContect";
import {
  storeTokenInLocalStorage,
  storeRoleInLocalStorage,
} from "../lib/common";
const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";
  // const { auth, setAuth } = useContext(AuthContext);
  // const {state,dispatch} = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: "post",
        url: API_ROUTES.SIGN_IN,
        data: {
          email,
          password,
        },
      });
      if (!response?.data?.token) {
        console.log("Something went wrong during signing in: ", response);
        return;
      }
      //const token = response.data.token;
      //const role = response.data.user.role;
      storeTokenInLocalStorage(response.data.token);
      storeRoleInLocalStorage(response.data.user.role);
      //setAuth({ role, token});
      //console.log(auth);
      //navigate(from, { replace: true });
      if (response.data.user.role === "admin") {
        navigate(APP_ROUTES.ADMINDASHBOARD);
      } else {
        navigate(APP_ROUTES.USERDASHBOARD);
      }
    } catch (err) {
      // if (!err?.response) {
      //   setError("No Server Response");
      // } else {
      //   setError("Registeration Failed");
      // }
      console.log("Some error occured during signing in: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800">
      <div className="w-1/2 h-1/2 shadow-lg rounded-md bg-white p-8 flex flex-col">
        <h2 className="text-center font-medium text-2xl mb-4">Sign in</h2>
        <div className="flex flex-1 flex-col justify-evenly">
          <input
            className="border-2 outline-none p-2 rounded-md"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            type="password"
            placeholder="*******"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            className="
            flex justify-center
            p-2 rounded-md w-1/2 self-center
            bg-gray-800  text-white hover:bg-gray-800"
            onClick={signIn}
          >
            {isLoading ? (
              <div className="mr-2 w-5 h-5 border-l-2 rounded-full animate-spin" />
            ) : null}
            <span>SIGN IN</span>
          </button>
        </div>
        <div className="text-center text-sm">
          Not a User?
          <Link to="/signup">
            <span className="font-medium text-gray-800 ml-1">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
