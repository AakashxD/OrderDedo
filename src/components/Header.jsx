import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/ContextUserInfo";
const Header = () => {
  const [BtnName, setBtnName] = useState("login");
  const onlineStatus=useOnlineStatus();
  const data=useContext(userContext);
  return (
    <div className="flex  bg-pink-100 justify-between shadow-lg px-4">
      <div className="logo-container">
        <img
          className="w-44"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhq5rZN9TJAHFwnhgwyBYZa73GF6Xbx6Q-Q&s"
          alt="Logo"
        />
      </div>
      <div className="flex items-center ">
        <ul className="flex  px-4 m-4 ">
         
          <li className="px-4">
             <Link to={"/"}>Home</Link></li>
          <li className="px-4"> <Link to={"/about"}>About Us</Link></li>
          <li className="px-4"><Link to={"/contact"}>Contact</Link></li>
          <li className="px-4">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              BtnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {BtnName}
          </button>
          <li className="px-4 font-bold" >{data.loggedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
