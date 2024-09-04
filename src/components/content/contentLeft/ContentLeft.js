import React from "react";
import "../contentLeft/ContentLeft.scss";

function ContentLeft({ data }) {
  const Icon = data.icon;
  return (
    <>
      <div className="app-user">
        <Icon className="app-user_icon" />
        <span className="title">{data.name}</span>
      </div>
    </>
  );
}

export default ContentLeft;
