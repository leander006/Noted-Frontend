import React from "react";
import Navbar from "../Navbar";

function About() {
  return (
    <>
      <div className="w-screen flex-col md:flex-row h-screen bg-gray-200  items-center flex text-black ">
        <Navbar />
        <div className="flex flex-col w-full h-full justify-center items-center md:flex-row ">
          <div className="mx-6 lg:mx-24">
            <h1 className="text-4xl my-4">I Am Leaner D'silva</h1>
            <p className="text-gray-600">
              I am currently perceiving my Btech from Dwarkadas J. Sanghvi
              College of Engineering, Mumbai in IT.
            </p>
            <p className="text-gray-600">
              I like exploring new technologies and challenging myself.
            </p>
            <p className="text-gray-600">Currently i am exploring Blockchain</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
