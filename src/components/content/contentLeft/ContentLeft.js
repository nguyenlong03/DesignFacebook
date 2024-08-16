import React from "react";
import "../contentLeft/ContentLeft.scss";
import { FaUserCircle } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { MdSaveAlt } from "react-icons/md";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

function ContentLeft({ data }) {
  const IconComponent = data.icon;
  return (
    <>
      <div className="app-user">
        <IconComponent className="app-user_icon" />
        <span className="title">{data.name}</span>
      </div>
    </>
  );
}

export default ContentLeft;
