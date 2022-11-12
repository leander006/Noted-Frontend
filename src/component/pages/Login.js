import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import toast from "react-hot-toast";
import { Context } from "../../Context/ContextProvider";
const axios = require("axios");

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://noted-website.herokuapp.com/api/auth/login",
        {
          username,
          password,
        }
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success("Login successfully");
      setUser(data);
      navigate("/notes");
    } catch (error) {
      console.log(error);
      return toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center h-screen bg-gray-300">
      <Navbar />
      <div className="w-screen h-screen flex items-center justify-center p-2">
        <div className="flex w-full bg-white rounded-lg lg:w-[400px] md:w-[300px] ">
          <div className="flex flex-col w-full p-5">
            <h1 className="text-xl text-blue-500 md:mb-3">Login</h1>
            <form
              className="flex justify-center flex-col item-center mt-4"
              onSubmit={handleSubmit}
            >
              <label className="mb-2">Username</label>
              <input
                className="w-full mb-3 h-12 rounded-md p-3 focus:outline-none md:mb-8 border border-black"
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                required
              />
              <label className="mb-2">Password</label>
              <input
                className="w-full h-12 mb-4 rounded-md p-3 focus:outline-none md:mb-8 border border-black"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
              <div className="md:flex md:justify-evenly">
                <input
                  type="submit"
                  className="bg-blue-500 text-white rounded-md mb-2 cursor-pointer w-full h-10 md:mr-2 hover:bg-blue-400"
                  value="Login"
                />
                <input
                  type="button"
                  className="bg-blue-500 text-white rounded-md mb-2 cursor-pointer w-full h-10 md:mr-2 hover:bg-blue-400"
                  value="Register"
                  onClick={() => navigate("/register")}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
