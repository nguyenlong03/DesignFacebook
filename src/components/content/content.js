import React from "react";
import ContentRight from "./contentRight/ContentRight";
import ContentLeft from "./contentLeft/ContentLeft";
import ContentFeed from "./contentFeed/ContentFeed";
import { posts, users, leftdata, Loitat, story } from "../../data";
import "../content/content.scss";
import ContentTitle from "./contentRight/ContentTitle";
import BottomLeft from "./contentLeft/BottomLeft";
import FeedBox1 from "./contentFeed/FeedBox1/FeedBox1";
import Postter from "./contentFeed/postter/Postter";
import Postcontent from "./contentFeed/postarticles/postcontent";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function Content(props) {
  return (
    <div className="content-main">
      <div className="content-left">
        {leftdata.map((item) => (
          <ContentLeft key={item.id} data={item} />
        ))}
        <hr />
        <div className="title-Loitat">
          <span className="title-name">
            <p style={{ fontSize: "20px", color: "#65676B" }}>
              Lối tắt của bạn
            </p>
          </span>
          <button className="title-bnt">chỉnh sửa</button>
        </div>
        {Loitat.map((item) => (
          <BottomLeft key={item.id} groud={item} />
        ))}
      </div>
      <div className="content-feed">
        <div className="bottom-content">
          <button className="btn">
            <AiOutlineLeft />
          </button>
          <button className="btn">
            <AiOutlineRight />
          </button>
        </div>
        <div className="name-story">
          <FeedBox1 />
          {story.map((item) => (
            <ContentFeed key={item.id} storys={item} />
          ))}
        </div>
        <div className="poter">
          <Postter />
        </div>
        <div className="post-articles">
          {posts.map((item) => (
            <div key={item.id} className="post-container">
              <Postcontent post={item} />
            </div>
          ))}
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
