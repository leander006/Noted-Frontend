import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContextProvider from "./Context/ContextProvider";
import { Toaster } from "react-hot-toast";
ReactDOM.render(
  <ContextProvider>
    <Toaster position="top-center" reverseOrder={false} />
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
