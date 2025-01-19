import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Search from "./components/Search";
import Chat from "./components/Chat"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Search></Search>
    <Chat></Chat>
  </div>
);
