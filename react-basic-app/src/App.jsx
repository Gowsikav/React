import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar/>
      <div className="flex-grow-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App
