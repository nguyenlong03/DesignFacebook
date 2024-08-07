import React from "react";
import { CiHome } from "react-icons/ci";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BiHomeCircle } from "react-icons/bi";
import "../NavbarFeed/NavbarFeed.scss";
import { FaGamepad } from "react-icons/fa6";


function NavbarFeed(props) {
  return (
    <div className="feed-container">
      <div className="icon-feed">
      <CiHome className="feed-icon" />
      </div>
      <div className="icon-feed">
      <MdOutlineOndemandVideo className="feed-icon" />
      </div>
      <div className="icon-feed">
      <BiHomeCircle className="feed-icon" />
      </div>
      <div className="icon-feed">
      <HiOutlineUserGroup className="feed-icon" />
      </div>
      <div className="icon-feed">
      <FaGamepad className="feed-icon" />
      </div>
      
    </div>
  );
}

export default NavbarFeed;
