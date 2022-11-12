import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const config = {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("userInfo"))?.token
      }`,
    },
  };
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [edit, setEdit] = useState(false);
  const [write, setWrite] = useState(false);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  }, []);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const { data } = await axios.get(
          "https://noted-website.herokuapp.com/api/note/fetchallnotes",
          config
        );
        setNotes(data);
      } catch (error) {
        console.log(error);
      }
    };
    getNotes();
    // eslint-disable-next-line
  }, [user, edit, write]);

  return (
    <Context.Provider
      value={{
        user,
        write,
        setWrite,
        setUser,
        edit,
        notes,
        setNotes,
        setEdit,
        note,
        setNote,
        config,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const ContextState = () => {
  return useContext(ContextProvider);
};

export default ContextProvider;
