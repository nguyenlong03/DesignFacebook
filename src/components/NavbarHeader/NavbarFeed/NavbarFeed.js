import React from "react";
import { PiVideoThin } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import "../NavbarFeed/NavbarFeed.scss";
import { FaGamepad } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { CiShop } from "react-icons/ci";
function NavbarFeed(props) {
  return (
    <>
      <ul className="feed-container">
        <li className="icon-feed">
          <GoHomeFill color="#0866FF" className="feed-icon" />
        </li>
        <li className="icon-feed">
          <PiVideoThin className="feed-icon" />
        </li>
        <li className="icon-feed">
          <CiShop className="feed-icon" />
        </li>
        <li className="icon-feed">
          <HiOutlineUserGroup className="feed-icon" />
        </li>
        <li className="icon-feed">
          <FaGamepad className="feed-icon" />
        </li>
      </ul>
    </>
  );
}

export default NavbarFeed;
