import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { BiLogoMessenger } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import "../NavbarLeft/NavbarLeft.scss";

function NavbarLeft(props) {
  return (
    <div className="Left-container">
      <CgMenuGridR />
      <div className="left-icon">
        <BiLogoMessenger />
        <span className="leftIconBadge">2</span>
      </div>
      <div className="left-icon">
        <IoIosNotifications />
        <span className="leftIconBadge">2</span>
      </div>
      <div className="left-icon">
        <FaUserCircle />
        <span className="leftIconBadge">2</span>
      </div>
    </div>
  );
}

export default NavbarLeft;
