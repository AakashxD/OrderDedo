
import useOnlineStatus from "../utils/useOnlineStatus";
const Footer = () => {
  const onlineStatus=useOnlineStatus();
    return (
      <div className="footer">
        <p>All rights reserved by AakashxD 
        </p>
       <ul>
       <li>online Status :{onlineStatus?"🟢":"🔴"}</li>
  
        </ul>
       
      </div>
    );
  };
  export default Footer;