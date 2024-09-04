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
        <img src={post.avatar} alt="" className="post-heder_img" />
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
      {/* trường hợp người dùng đăng nhiều ảnh 
           b1:data phải là 1 mảng chứa các ảnh
           b2: nếu img là 1 mảng thì lặp qua và render ra các ảnh (Array.isArray(post.img) )
         */}
      {Array.isArray(post.img) ? (
        post.img.map((image, index) => (
          <img key={index} src={image} alt="" className="post-images" />
        ))
      ) : (
        <img src={post.img} alt="post-image" className="post-image" />
      )}
      <div className="post-title">
        <div className="post-title_icon1">
          <span className="like" style={{ fontSize: "18px", marginTop: "5px" }}>
            <AiFillLike fontSize={"25px"} color="#137AFF" />
            <MdEmojiEmotions fontSize={"25px"} color="#FDD870" />
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
      <ul className="post-feeling">
        <linearGradient className="feeling-icon">
          <AiOutlineLike size="25px" onClick={handled} /> Like
        </linearGradient>
        <li className="feeling-icon">
          <FiMessageCircle size="25px" /> Bình luận
        </li>
        <li className="feeling-icon">
          <SlLink size="25px" /> Sao chép
        </li>
        <li className="feeling-icon">
          <SlActionRedo size="25px" /> Chia sẻ
        </li>
      </ul>
    </>
  );
}

export default Postcontent;
