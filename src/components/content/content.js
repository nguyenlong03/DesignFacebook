import React from "react";
import ContentRight from "./contentRight/ContentRight";
import ContentLeft from "./contentLeft/ContentLeft";
import ContentFeed from "./contentFeed/ContentFeed";
import { users } from "../../data";
import "../content/content.scss";

function Content(props) {
  return (
    <div className="content-main">
      <div className="content-left">
        <ContentLeft />
      </div>
      <div className="content-feed">
      
          <ContentFeed  />
      </div>
      <div className="content-right">
      {users.map((u) => (
          <ContentRight key={u.id} user={u} />
        ))}

      </div>
    </div>
  );
}

export default Content;
