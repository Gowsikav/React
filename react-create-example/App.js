import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement(
  "h1",
  { id: "title" },
  "Hello World from React!"
);

console.log(heading);

let head = <h1 id="title">Welcome to React learning</h1>;

console.log(head);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(head);
