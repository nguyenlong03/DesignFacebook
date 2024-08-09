import React from "react";
import "../contentFeed/ContentFeed.scss";
import ContenFeedStory from "./contenFeedStory/contenFeedStory";

function ContentFeed(props) {
  return (
    <div className="feed-main">
      <div className="feed-str">
       <ContenFeedStory/>
      </div>
      <div className="feed-content">

      </div>
      <div className="feed-post">

      </div>
    </div>
  )
}

export default ContentFeed;
