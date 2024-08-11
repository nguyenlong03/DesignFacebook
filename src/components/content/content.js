import React from "react";
import ContentRight from "./contentRight/ContentRight";
import ContentLeft from "./contentLeft/ContentLeft";
import ContentFeed from "./contentFeed/ContentFeed";
import { users } from "../../data";
import { Loitat } from "../../data";
import { story } from "../../data";
import "../content/content.scss";
import ContentTitle from "./contentRight/ContentTitle";
import BottomLeft from "./contentLeft/BottomLeft";
import FeedBox1 from "./contentFeed/FeedBox1/FeedBox1";
import Postter from "./contentFeed/postter/Postter";
import Postarticles from "./contentFeed/postarticles/Postarticles";

function Content(props) {
  return (
    <div className="content-main">
      <div className="content-left">
        <ContentLeft />
        {Loitat.map((item) => (
          <BottomLeft key={item.id} groud={item} />
        ))}
      </div>
      <div className="content-feed">
        <FeedBox1 />
        {story.map((item) => (
          <ContentFeed key={item.id} storys={item} />
        ))}
        <div className="poter">
          <Postter />
        </div>
        <div className="post-articles">
           <Postarticles/>
           
        </div>
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
