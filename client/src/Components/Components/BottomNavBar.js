
import {MdExplore} from "react-icons/md";
import {FaUserFriends} from "react-icons/fa";
import {BsChatRightTextFill} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const BottomNavBar = () => {
    return ( 
        <div className="z-50 navBar fixed bottom-0 w-full bg-gray-200 flex justify-around py-3 text-gray-700 ">
            
          <div className="w-full flex justify-center">
            <NavLink to="/"
            className={({ isActive }) =>
            isActive ? "text-primary-red" : "text-gray-600"}
          >
            <MdExplore size={24}/>
            </NavLink>
            </div>
            <div className="w-full flex justify-center">
            <NavLink to="/amigos"
            className={({ isActive }) =>
            isActive ? "text-primary-red" : "text-gray-600"}
            >
            <FaUserFriends size={24}/>
              </NavLink>
            </div>
              <div className="w-full flex justify-center">
            <NavLink to="/community"
            className={({ isActive }) =>
            isActive ? "text-primary-red" : "text-gray-600"}
            >
            <BsChatRightTextFill size={24}/>
              </NavLink>
              </div>
        </div>
     );
}
 
export default BottomNavBar;