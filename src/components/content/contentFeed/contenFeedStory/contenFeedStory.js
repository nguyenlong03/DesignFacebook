import React from 'react';
import logo from "../../../../acsset/image/Facebook-Avatar_3.png"
import logo1 from "../../../../acsset/image/user2.jpg"
import logo2 from "../../../../acsset/image/user3.jpg"
import "../../contentFeed/contenFeedStory/contenFeedStory.scss";

function ContenFeedStory(props) {
    return (
        <div className='Story-containerr'>
         <div className="Story-main">
            <img src={logo} alt="" className='str-img'/>
            <button className='str-btn'>+</button>
            <span className='str-text'><b>Tạo tin</b></span>
         </div>
         <div className="Story-user">
            <img src={logo1} alt="" className='str-user_main'/>
            <img src={logo2} alt="" className='str-user_img'/>
            <span className='user-text'> nguyễn phương</span>
         </div>
            
        </div>
    );
}

export default ContenFeedStory;