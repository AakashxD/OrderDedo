import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [BtnName, setBtnName] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhq5rZN9TJAHFwnhgwyBYZa73GF6Xbx6Q-Q&s"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
             <Link to={"/"}>Home</Link></li>
          <li> <Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              BtnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {BtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
