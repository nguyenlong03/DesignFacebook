import React from "react";
import "../contentRight/ContentRight.scss";


function ContentRight({ user }) {
  return (
    <>
      
      <div className="Right-app">
        <div className="Right-user">
          <img src={user.image} alt="" className="Right-img"/>
          <span className="round">{user.round}</span>
          <span className="title">{user.username}</span>
        </div>
      </div>
    </>
  );
}

export default ContentRight;
