import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/ContextProvider";
import Navbar from "../Navbar";
import NoPreview from "../NoPreview";

function Notes() {
  const { user, notes } = useContext(Context);

  return (
    <div className="flex w-screen flex-col md:flex-row h-screen bg-gray-300">
      <Navbar />
      <div className="w-full">
        <img
          className="w-screen relative h-64 md:rounded-none object-cover opacity-90"
          src="/notes.jpg"
          alt="notes"
        />
        <h1 className="top-52 right-3 absolute md:top-16 md:text-2xl md:left-64 text-white ">
          Hello {user?.others?.username}
        </h1>
        <p className="top-56 absolute right-3 md:top-24 md:left-64 text-white ">
          {new Date().toDateString()}
        </p>
        <div className="md:absolute top-[22vh] mt-1 border rounded-lg md:shadow-2xl md:w-[60%] bg-white h-[25vh] md:h-52 mx-3 mb-3">
          <h1 className="text-blue-600 mx-4 mt-2">Recent notes</h1>
          {notes.length !== 0 ? (
            <div className="my-3 mx-3 grid grid-cols-1 md:grid-cols-3 overflow-x-scroll h-[75%] ">
              {notes.slice(0, 3).map(({ title, description, _id }) => (
                <Link
                  className="rounded-lg mx-3 hover:scale-105 cursor-pointer duration-150 bg-gray-200 my-2 border p-1"
                  key={_id}
                  to={`/singleNotes/${_id}`}
                >
                  <div className="w-full">
                    <h1 className="text-gray-900 font-bold capitalize ">
                      {title.length > 8
                        ? title.substring(0, 8).concat("...")
                        : title}
                    </h1>
                    <p className="w-full">
                      {description.length > 100
                        ? description.substring(0, 60).concat("...")
                        : description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <NoPreview />
          )}
        </div>

        <div className=" md:absolute bottom-2 rounded-lg h-[30vh] md:h-[42vh] md:w-[70%] lg:w-[75%] md:shadow-2xl xl:h-[40vh] bg-white mx-3">
          <h1 className="text-blue-600 mx-4 mt-2">All notes</h1>
          {notes.length !== 0 ? (
            <div className="my-1 mx-3 overflow-x-scroll grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-[85%] ">
              {notes.map(({ title, description, _id }) => (
                <Link
                  className="rounded-lg mx-3 hover:scale-105 cursor-pointer duration-150 bg-gray-200 my-2 border p-1"
                  key={_id}
                  to={`/singleNotes/${_id}`}
                >
                  <div>
                    <h1 className="text-gray-900 font-bold capitalize">
                      {title.length > 8
                        ? title.substring(0, 8).concat("...")
                        : title}
                    </h1>
                    <p>
                      {description.length > 200
                        ? description.substring(0, 200).concat("...")
                        : description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <NoPreview />
          )}
        </div>
      </div>
    </div>
  );
}

export default Notes;
