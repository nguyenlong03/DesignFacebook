import React, { useState } from "react";
import { PiVideoThin } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import "../NavbarFeed/NavbarFeed.scss";
import { FaGamepad } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { CiShop } from "react-icons/ci";

function NavbarFeed() {
  const [menu, setmenu] = useState("GoHomeFill");

  return (
    <>
      <ul className="feed-container">
        <li
          onClick={() => setmenu("GoHomeFill")}
          className={`icon-feed ${menu === "GoHomeFill" ? "active" : ""}`}
        >
          <GoHomeFill />
        </li>
        <li
          onClick={() => setmenu("PiVideoThin")}
          className={`icon-feed ${menu === "PiVideoThin" ? "active" : ""}`}
        >
          <PiVideoThin />
        </li>
        <li
          onClick={() => setmenu("CiShop")}
          className={`icon-feed ${menu === "CiShop" ? "active" : ""}`}
        >
          <CiShop />
        </li>
        <li
          onClick={() => setmenu("HiOutlineUserGroup")}
          className={`icon-feed ${
            menu === "HiOutlineUserGroup" ? "active" : ""
          }`}
        >
          <HiOutlineUserGroup />
        </li>
        <li
          onClick={() => setmenu("FaGamepad")}
          className={`icon-feed ${menu === "FaGamepad" ? "active" : ""}`}
        >
          <FaGamepad />
        </li>
      </ul>
    </>
  );
}

export default NavbarFeed;
