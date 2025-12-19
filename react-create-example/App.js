import ReactDOM from "react-dom/client";

const Header=()=>{
  return(
    <div>
      <h1 style={{color:"blue"}}>Welcome to Learning React</h1>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h2>About React</h2>
      <p>React is a JavaScript library for building UI.</p>
    </div>
  );
};

const Course = () => {
  return (
    <div>
      <h2>Course Details</h2>
      <p>This course covers basics to advanced concepts.</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h3 style={{fontFamily:"cursive"}}>Thank you for learning!</h3>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Course />
      <Footer />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
