import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement("div", { id: "seconddiv" }, [
  React.createElement("h1", {}, "Hello World from React!"),
  React.createElement("h2", {}, "This is a subheading"),
  React.createElement("p", {}, "This is a paragraph created using React."),
  React.createElement("div", { id: "innerdiv" }, [
    React.createElement("a", { href: "https://x-workz.com/" }, "Xworkz Link"),
    React.createElement("img", {
      src: "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/Gallery/45.jpeg",
      alt: "Xworkz Logo",
      width: "150px",
      height: "150px",
    }),
  ]),
]);

let head = (
  <div id="seconddiv">
    <h1>Hello World from react</h1>
    <h2>This is a sub heading</h2>
    <p>This is a paragraph created using React</p>
    <div id="inndediv">
      <a href="https://x-workz.com/">Xworkz Link</a>
      <img
        src="https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/Gallery/45.jpeg"
        alt="Xworkz Logo"
        width="150 px"
        height="150px"
      />
    </div>
  </div>
);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(head);
