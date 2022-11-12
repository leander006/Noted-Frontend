import axios from "axios";

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/ContextProvider";
import Navbar from "../Navbar";
import toast from "react-hot-toast";

function Setting() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { config, setUser } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!username && !email && !password) {
        return toast.error("Atleast filled anyone filed");
      }
      const { data } = await axios.put(
        "https://noted-website.herokuapp.com/api/auth/update",
        {
          username,
          password,
          email,
        },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUser(data);
      toast.success("updated successfully");
      navigate("/notes");
    } catch (error) {
      console.log(error?.response?.data?.data);
      return toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex flex-col md:flex-row items-center h-screen bg-gray-300">
      <Navbar />
      <div className="w-screen h-screen flex items-center p-2 justify-center">
        <div className="flex w-screen bg-white rounded-lg lg:w-[400px]  md:w-[300px]">
          <div className="flex flex-col w-full p-5">
            <h1 className="text-xl text-blue-500 md:mb-3">Update User</h1>
            <form
              className="flex justify-center flex-col item-center mt-4"
              onSubmit={handleSubmit}
            >
              <label className="mb-2">Username</label>
              <input
                className="w-full mb-3 h-12 rounded-md p-3 focus:outline-none md:mb-8 border border-black"
                onChange={(e) => setUsername(e.target.value)}
                type="text"
              />
              <label className="mb-2">Email</label>
              <input
                className="w-full h-12 mb-4 rounded-md focus:outline-none p-3 md:mb-8 border border-black"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <label className="mb-2">Password</label>
              <input
                className="w-full h-12 mb-4 rounded-md focus:outline-none p-3 md:mb-8 border border-black"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <div className="md:flex md:justify-evenly">
                <input
                  type="submit"
                  className="bg-blue-500 rounded-md mb-2 cursor-pointer w-full h-10 md:mr-2 hover:bg-blue-400"
                  value="Update User"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
