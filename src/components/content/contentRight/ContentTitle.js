import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMore } from "react-icons/ai";
import "../contentRight/ContentTitle.scss";

function ContentTitle(props) {
  return (
    <>
      <div className="birtday">
        <h4>Sinh nhật</h4>
        <div className="birtday-title">
          <FaBirthdayCake className="icon-birt" />
          <span className="title1">
            Hôm nay là sinh nhật của <b>Nguyễn Long</b>
          </span>
        </div>
      </div>
      <hr></hr>
      <div className="seach">
        <h4 className="title2">Người liên hệ</h4>
        <div className="app-icon">
          <CiSearch className="icon-title"/>
          <AiOutlineMore className="icon-title"/>
        </div>
      </div>
    </>
  );
}

export default ContentTitle;
