import React from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import "../NavbarFeed/NavbarFeed.scss";
import { FaGamepad } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { CiShop } from "react-icons/ci";

function NavbarFeed(props) {
  return (
    <div className="feed-container">
      <div className="icon-feed">
        <GoHomeFill color="#0866FF" className="feed-icon" />
      </div>
      <div className="icon-feed">
        <MdOutlineOndemandVideo className="feed-icon" />
      </div>
      <div className="icon-feed">
        <CiShop className="feed-icon" />
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
