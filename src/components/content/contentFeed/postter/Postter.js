import React from "react";
import "../../contentFeed/postter/Postter.scss";
import { MdVideoCameraBack } from "react-icons/md";
import { IoMdImages } from "react-icons/io";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import logo2 from "../../../../acsset/image/Facebook-Avatar_3.png"

function Postter(props) {
  return (
    <>
      <div className="poster-heder">
        <img src={logo2} alt="" className="poster-img" />
        <input type="text" className="poster-title" placeholder="Nguyễn ơi, bạn đang nghĩ gì thế ?"/>
      </div>
      <hr />
      <div className="poster-body">
        <div className="poster-item">
          <MdVideoCameraBack className="poster-icon"/>
          <span className="poster-text"> Video trực tiếp</span>
        </div>
        <div className="poster-item">
          <IoMdImages className="poster-icon"/>
          <span className="poster-text"> ảnh/video</span>
        </div>
        <div className="poster-item">
          <MdOutlineInsertEmoticon className="poster-icon"/>
          <span className="poster-text">Cảm xúc/hoạt động </span>
        </div>
      </div>
    </>
  );
}

export default Postter;
