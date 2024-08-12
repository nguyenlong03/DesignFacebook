import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import "../NavbarRight/NavbarRight.scss";
import { IoMdMenu } from "react-icons/io";

function NavbarRight(props) {
  return (
    <div className="navbarRight-app">
      <div className="navbar-right">
        <FaFacebook className="right-icon" color="blue" size="35px" />
        <div className="right">
          <IoSearchOutline size="20px" className="right-seach" />
          <input
            type="text"
            placeholder="Tìm kiếm trên facebook"
            className="right-input"
          />
        </div>
        <div className="menu">
          <IoMdMenu />
        </div>
      </div>
    </div>
  );
}

export default NavbarRight;
