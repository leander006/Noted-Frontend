import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../Context/ContextProvider";
import Navbar from "../Navbar";
import toast from "react-hot-toast";
function SingleNotes() {
  const navigate = useNavigate();
  const { config, setNotes, notes, setNote, note } = useContext(Context);

  const { NoteId } = useParams();

  useEffect(() => {
    const getNotes = async () => {
      try {
        const { data } = await axios.get(
          "https://noted-website.herokuapp.com/api/note/getNote/" + NoteId,
          config
        );
        setNote(data);
      } catch (error) {
        console.log(error?.response?.data?.data);
        return toast.error("Something went wrong");
      }
    };

    getNotes();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(
        "https://leander-notes.herokuapp.com/api/note/deletenote/" + NoteId,
        config
      );
      setNotes(notes.filter((n) => n._id !== NoteId));
      toast.success("Deleted successfully");
      navigate("/notes");
    } catch (error) {
      console.log(error);
      return toast.error("Something went wrong");
    }
  };
  const edit = () => {
    navigate(`/edit/${NoteId}`);
  };
  return (
    <div className="flex flex-col md:flex-row h-screen items-center bg-gray-300">
      <Navbar />
      <div className="w-screen h-screen">
        <div className="flex flex-col p-4  md:p-16">
          <div className="flex justify-between items-center">
            <h1 className="capitalize font-bold text-2xl">{note?.title}</h1>
            <div className="space-x-4">
              <i
                className="fa-solid text-blue-600 hover:scale-125 duration-150 fa-xl cursor-pointer fa-trash"
                onClick={handleDelete}
              ></i>
              <i
                className="fa-solid text-blue-600 fa-xl hover:scale-125 duration-150 cursor-pointer fa-pen-to-square"
                onClick={edit}
              ></i>
            </div>
          </div>
          <div className="capitalize text-2xl mt-4">{note?.description}</div>
        </div>
      </div>
    </div>
  );
}

export default SingleNotes;
