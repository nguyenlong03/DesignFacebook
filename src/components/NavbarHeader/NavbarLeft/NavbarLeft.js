import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { BiLogoMessenger } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import "../NavbarLeft/NavbarLeft.scss";
import logo from "../../../acsset/image/user.jpg";

function NavbarLeft(props) {
  return (
    <div className="Left-container">
      <div className="left-icon">
        <CgMenuGridR className="iconItem" />
      </div>
      <div className="left-icon">
        <BiLogoMessenger className="iconItem" />
        <span className="leftIconBadge">10</span>
      </div>
      <div className="left-icon">
        <IoIosNotifications className="iconItem" />
        <span className="leftIconBadge">2</span>
      </div>
      <div className="left-icon_avatar">
        <img src={logo} alt="" className="iconItem-avatar" />
      </div>
    </div>
  );
}

export default NavbarLeft;
