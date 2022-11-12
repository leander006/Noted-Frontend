import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/ContextProvider";
import Navbar from "../Navbar";
import toast from "react-hot-toast";

function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { config, setNotes, notes, setWrite } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      return toast.error("Atleast filled anyone filed");
    }
    if (title.length > 15) {
      return toast.error("title must be lesser then 15 words");
    }
    try {
      const { data } = await axios.post(
        "https://noted-website.herokuapp.com/api/note/addnote",
        {
          title,
          description,
        },
        config
      );
      toast.success("Notes added successfully");
      setNotes([...notes, data]);
      setWrite(true);
      navigate("/notes");
      setWrite(false);
    } catch (error) {
      console.log(error?.response?.data?.data);
      return toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex flex-col md:flex-row items-center h-screen bg-gray-300">
      <Navbar />

      <div className="h-screen w-screen flex items-center p-1">
        <div className="h-96 w-full px-1 md:h-[420px] md:w-[75%] mx-auto bg-white rounded-lg">
          <h1 className="text-blue-600 md:text-lg mx-2 my-2 md:py-1">
            Write notes
          </h1>
          <form className="h-full mx-1 " onSubmit={handleSubmit}>
            <input
              className="w-full mb-1 focus:outline-none rounded-md p-1.5 border border-black"
              type="text"
              placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              rows={10}
              className="w-full mb-1 focus:outline-none rounded-md p-1.5 border border-black"
              placeholder="Enter notes"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <button
              className="border text-white hover:scale-105 ml-2 duration-150 p-1 md:p-2 rounded-md bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Write;
