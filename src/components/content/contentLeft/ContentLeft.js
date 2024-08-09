import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import "../contentLeft/ContentLeft.scss";
import { FaUsers } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { MdSaveAlt } from "react-icons/md";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

function ContentLeft(props) {
  return (
    <>
      <div className="app-user">
        <FaUserCircle className="app-user_icon" />
        <span className="title">nguyễn long</span>
      </div>
      <div className="app-user">
        <FaUserFriends className="app-user_icon" />
        <span className="title">Bạn bè</span>
      </div>
      <div className="app-user">
        <FaUserCircle className="app-user_icon" />
        <span className="title">Bảng Feed</span>
      </div>
      <div className="app-user">
        <FaUsers className="app-user_icon" />
        <span className="title">Nhóm</span>
      </div>
      <div className="app-user">
        <CiShop className="app-user_icon" />
        <span className="title">Maketplace</span>
      </div>
      <div className="app-user">
        <MdOutlineOndemandVideo className="app-user_icon" />
        <span className="title">Video</span>
      </div>
      <div className="app-user">
        <GoClockFill className="app-user_icon" />
        <span className="title">Kỷ niệm</span>
      </div>
      <div className="app-user">
        <MdSaveAlt className="app-user_icon" />
        <span className="title">Đã lưu</span>
      </div>
      <div className="app-user">
        <FaRegArrowAltCircleDown className="app-user_icon" />
        <span className="title">Xem thêm</span>
      </div>
      <hr />

      <div className="title-Loitat">
        <span className="title-name"> <b>Lối tắt của bạn</b></span>
        <button className="title-bnt">chỉnh sửa</button>
      </div>

    </>
  );
}

export default ContentLeft;
