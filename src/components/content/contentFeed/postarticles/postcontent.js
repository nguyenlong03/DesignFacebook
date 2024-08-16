import React from "react";
import "../postarticles/Postarticles.scss";
import { GoKebabHorizontal } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import { MdEmojiEmotions } from "react-icons/md";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { SlActionRedo } from "react-icons/sl";
import { SlLink } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import logo from "../../../../acsset/image/user2.jpg";
import { useState } from "react";

function Postcontent({ post }) {
  const [isLiked, setIsLiked] = useState(1);
  const handled = () => {
    setIsLiked(isLiked + 1);
  };
  return (
    <>
      <div className="post-header">
        <img src={post.img} alt="" className="post-heder_img" />
        <div className="post-header_item">
          <span className="post-heder_text">
            {post.name} <b style={{ color: "blue" }}>Theo dõi</b>
          </span>
          <div className="icon">
            <GoKebabHorizontal className="icon-post" />
            <GrClose className="icon-post" />
          </div>
        </div>
      </div>
      <p className="post-p">{post.title}</p>
      <img src={post.img} alt="" className="post-image" />
      <div className="post-title">
        <div className="post-title_icon1">
          <span className="like" style={{ fontSize: "18px", marginTop: "5px" }}>
            <AiFillLike size="20px" color="#137AFF" />
            <MdEmojiEmotions size="20px" color="#FDD870" />
            <span>{isLiked}</span>
          </span>
        </div>
        <div className="post-title_icon">
          <span className="text">
            1,5k <TbMessageCircle2Filled color="#606770" size="20px" />
          </span>
          <span className="text">
            730 <SlActionRedo color="#606770" size="20px" />
          </span>
        </div>
      </div>
      <hr className="hr-icon" />
      <div className="post-feeling">
        <span className="feeling-icon">
          <AiOutlineLike size="25px" onClick={handled} /> Like
        </span>
        <span className="feeling-icon">
          <FiMessageCircle size="25px" /> Bình luận
        </span>
        <span className="feeling-icon">
          <SlLink size="25px" /> Sao chép
        </span>
        <span className="feeling-icon">
          <SlActionRedo size="25px" /> Chia sẻ
        </span>
      </div>
    </>
  );
}

export default Postcontent;
