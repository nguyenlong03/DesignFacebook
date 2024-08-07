import React from "react";
import { CiHome } from "react-icons/ci";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BiHomeCircle } from "react-icons/bi";
import "../NavbarFeed/NavbarFeed.scss";

function NavbarFeed(props) {
  return (
    <div className="feed-container">
      <CiHome />
      <BiHomeCircle />
      <MdOutlineOndemandVideo />
      <HiOutlineUserGroup />
    </div>
  );
}

export default NavbarFeed;
