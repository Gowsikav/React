import { SWIGGY_LOGO } from "../utility/constants";

let Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={SWIGGY_LOGO} width={100}></img>
      </div>
      <div className="nav">
        <ul>
          <li>Offers</li>
          <li>Sign in</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
