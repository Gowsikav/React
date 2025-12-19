import ReactDOM from "react-dom/client";

function Title() {
  return (
    <div>
      <h1>Learning React</h1>
    </div>
  )
}

let styles = {
  color: "yellow",
}

let Head = () => {
  return (
    <div id="seconddiv" style={{ backgroundColor: "blue" }}>
      <Title />
      <h2 style={{ color: "white" }}>This is a sub heading</h2>
      <p style={styles}>This is a paragraph created using React</p>
      <div className="innerdiv">
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
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Head />);
