import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/ContextProvider";
import Navbar from "../Navbar";
import toast from "react-hot-toast";
const Home = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(Context);
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    toast.success("Logout successfully");
    navigate("/");
  };
  return (
    <div className="fw-screen flex-col md:flex-row h-screen justify-center items-center flex">
      <Navbar />
      <div className="w-screen h-screen">
        <h1 className="absolute text-xl sm:text-4xl md:text-5xl left-[25vw] md:left-[38vw] lg:left-[45vw] text-blue-500 top-[37vh]">
          Make your notes
        </h1>
        <h1 className="absolute text-xl sm:text-4xl md:text-5xl left-[25%] md:left-[38vw] lg:left-[45vw] text-blue-500 top-[43vh] ">
          explore your emotions
        </h1>

        <img
          className="h-full w-full object-left "
          src="./home2.jpg"
          alt="home"
        />
        {!user ? (
          <div>
            <input
              type="button"
              className="absolute p-2 top-[50vh] left-[25vw] text-white md:left-[45vw] lg:left-[53vw] xl:left-[49vw] bg-blue-500 rounded-md cursor-pointer  hover:bg-blue-400"
              value="Register"
              onClick={() => navigate("/register")}
            />
            <input
              type="button"
              className="absolute p-2 top-[50vh] text-white left-[60vw] md:left-[75vw] lg:left-[73vw] xl:left-[65vw] bg-blue-500 rounded-md cursor-pointer  hover:bg-blue-400"
              value="Login"
              onClick={() => navigate("/login")}
            />
          </div>
        ) : (
          <div
            className="absolute p-2 top-[50vh] text-white left-[45vw] md:left-[60vw] lg:left-[63vw] xl:left-[54vw] bg-blue-500 rounded-md cursor-pointer  hover:bg-blue-400"
            onClick={handleLogout}
          >
            Logout
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
