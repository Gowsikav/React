import React from "react";
import ReactDOM from "react-dom/client";

let heading =React.createElement("h1", { id: "title" },"Hello World from React!");

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);