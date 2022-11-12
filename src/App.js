import "./App.css";
import React, { useContext } from "react";

import Home from "./component/pages/Home";
import About from "./component/pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./component/pages/Login";
import { Context } from "./Context/ContextProvider";

import Register from "./component/pages/Register";
import Write from "./component/pages/Write";
import Notes from "./component/pages/Notes";
import Setting from "./component/pages/Setting";
import SingleNotes from "./component/pages/SingleNotes";
import Edit from "./component/pages/Edit";

function App() {
  const { user } = useContext(Context);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/write" element={user ? <Write /> : <Login />}></Route>
          <Route path="/notes" element={user ? <Notes /> : <Login />}></Route>
          <Route
            path="/setting"
            element={user ? <Setting /> : <Login />}
          ></Route>
          <Route path="/login" element={!user ? <Login /> : <Notes />}></Route>
          <Route
            path="/singleNotes/:NoteId"
            element={user ? <SingleNotes /> : <Login />}
          ></Route>
          <Route
            path="/register"
            element={!user ? <Register /> : <Notes />}
          ></Route>
          <Route
            path="/edit/:NoteId"
            element={user ? <Edit /> : <Login />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
