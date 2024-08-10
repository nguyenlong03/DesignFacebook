import React from "react";
import logo from "../../../../acsset/image/Facebook-Avatar_3.png";
import "../FeedBox1/FeedBox1.scss";

function FeedBox1(props) {
  return (
    <div>
      <div className="Story-main">
        <img src={logo} alt="" className="str-img" />
        <button className="str-btn">+</button>
        <span className="str-text">
          <b>Tạo tin</b>
        </span>
      </div>
    </div>
  );
}

export default FeedBox1;
