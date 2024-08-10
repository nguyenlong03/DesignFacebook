import React from "react";
import "../contentFeed/ContentFeed.scss";


function ContentFeed({storys}) {
  return (
    <div className='Story-containerr'>
    <div className="Story-user">
       <img src={storys.image} alt="" className='str-user_main'/>
       <img src={storys.image} alt="" className='str-user_img'/>
       <span className='user-text'>{storys.name}</span>
    </div>
       
   </div>
  );
}

export default ContentFeed;
