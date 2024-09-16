
import useOnlineStatus from "../utils/useOnlineStatus";
const Footer = () => {
  const onlineStatus=useOnlineStatus();
    return (
      <div className="footer text-center mt-6 ">
        <p>All rights reserved by OrderLelo 
        </p>
       <ul>
       <li>online Status :{onlineStatus?"🟢":"🔴"}</li>
  
        </ul>
       
      </div>
    );
  };
  export default Footer;