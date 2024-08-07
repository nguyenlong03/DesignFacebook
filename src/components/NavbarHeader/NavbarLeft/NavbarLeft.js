import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { BiLogoMessenger } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import "../NavbarLeft/NavbarLeft.scss";
import logo from "../../../acsset/image/user.jpg"

function NavbarLeft(props) {
  return (
    <div className="Left-container">
      <div className="left-icon">
      <CgMenuGridR size="20px" className="iconItem" />
      </div>
      <div className="left-icon">
        <BiLogoMessenger size="10px" className="iconItem" />
        <span className="leftIconBadge">10</span>
      </div>
      <div className="left-icon">
        <IoIosNotifications size="20px" className="iconItem" />
        <span className="leftIconBadge">2</span>
      </div>
      <div className="left-icon">
      <img src={logo} alt="" className="iconItem" />
        <span className="leftIconBadge">2</span>
      </div>
    </div>
  );
}

export default NavbarLeft;
