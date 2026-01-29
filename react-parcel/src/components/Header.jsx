import { useEffect, useState } from "react";
import { SWIGGY_LOGO } from "../utility/constants";
import { Link } from "react-router-dom";

let Header = () => {
  const [button,setButton]=useState("login");

  useEffect(()=>{
    console.log("executing after rendering");
  },[button]);

  console.log("Header rendered")

  return (
    <div className="header">
      <div className="logo">
        <img src={SWIGGY_LOGO} width={100}></img>
      </div>
      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><button onClick={() =>
                setButton(button === "login" ? "logout" : "login")
              }>{button}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
