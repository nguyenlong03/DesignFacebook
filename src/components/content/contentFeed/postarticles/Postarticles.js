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
import logo from "../../../../acsset/image/user2.jpg"

function Postarticles(props) {
  return (
    <>
      <div className="post-header">
        <img src={logo} alt="" className="post-heder_img" />
        <span className="post-heder_text">Angels <b style={{color:"blue"}}>Theo dõi</b></span>
        <span className="post-heder_icon">
        <GoKebabHorizontal className="icon-post"/>
        <GrClose  className="icon-post" />
        </span>
        
      </div>

      <img src={logo} alt="" className="post-image" />

      <div className="post-title">
        <div className="post-title_icon1">       
             <AiFillLike  color="#137AFF"/>
             <MdEmojiEmotions color="#FDD870"/> 
            <span className="like">1,3k</span> 
        </div>

        <div className="post-title_icon">
              <span className="text">1,5k <TbMessageCircle2Filled color="#606770"/></span>
              <span className="text">730 <SlActionRedo color="#606770"/></span>
        </div>
      </div>

      <hr className="hr-icon"/>

      <div className="post-feeling">
        <span className="feeling-icon"><AiOutlineLike/> Like</span>
        <span className="feeling-icon"><FiMessageCircle/> Bình luận</span>
        <span className="feeling-icon"><SlLink /> Sao chép</span>
        <span className="feeling-icon"><SlActionRedo /> Chia sẻ</span>
      </div>
    </>
  );
}

export default Postarticles;
