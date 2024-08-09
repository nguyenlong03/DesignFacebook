import React from "react";
import "../contentLeft/BottomLeft.scss";

function BottomLeft({groud}) {
  return (
    <>
      <div className="Bottom-Left">
        <div className="bottom-main">
            <img src={groud.img} alt="" className="bottom-img"/>
            <span className="bottom-text">{groud.ground}</span>
        </div>
      </div>
    </>
  );
}

export default BottomLeft;
