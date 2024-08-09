import React from "react";
import ContentRight from "./contentRight/ContentRight";
import ContentLeft from "./contentLeft/ContentLeft";
import ContentFeed from "./contentFeed/ContentFeed";
import { users } from "../../data";
import { Loitat } from "../../data";
import "../content/content.scss";
import ContentTitle from "./contentRight/ContentTitle";
import BottomLeft from "./contentLeft/BottomLeft";

function Content(props) {
  return (
    <div className="content-main">
      <div className="content-left">
        <ContentLeft />
{
  Loitat.map((item)=>(
    <BottomLeft key ={item.id} groud = {item}/>
  ))
}
        
      </div>
      <div className="content-feed">
        <ContentFeed />
      </div>
      <div className="content-right">
        <ContentTitle />
        {users.map((u) => (
          <ContentRight key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
}

export default Content;
