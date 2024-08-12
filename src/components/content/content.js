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
import logo from "../../acsset/image/user.jpg";
import logo1 from "../../acsset/image/user1.jpg";
import logo2 from "../../acsset/image/user4.jpg";
import logo3 from "../../acsset/image/user3.jpg";
import logo5 from "../../acsset/image/user5.jpg";

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
        <div className="name">
          <FeedBox1 />
          {story.map((item) => (
            <ContentFeed key={item.id} storys={item} />
          ))}
        </div>

        <div className="poter">
          <Postter />
        </div>
        <div className="post-articles">
          <Postarticles name = "nguyenlong"  title = "Đi Giữa Trời Rực Rỡ TẬP 10: Chải cuối cùng cũng c:ứu được Pu, cả hai đưa ra quyết định lớn cho tương lai, CHẢI và bố đồng ý cho  PU đi học Đại học 2 ĐIỀU KIỆN👇 Xem dưới bình luận👇"  img = {logo}/>
        </div>
        <div className="post-articles">
          <Postarticles name = "nguyenlong"  title = "#j2team_news 12/8/2024 🧐 Viettel tối qua đến giờ lỗi cuộc gọi (không gọi đi được, không check tài khoản bằng *101#...được).Lỗi xuất hiện trên các dòng iphone 6, 7, 8."  img ={logo1}/>
        </div>
        <div className="post-articles">
          <Postarticles name = "nguyenlong"  title = "Chúc mừng gia đình Đặng Thu Hà chính thức có thêm thành viên mới! 🥳"  img ={logo2}/>
        </div>
        <div className="post-articles">
          <Postarticles name = "nguyenlong"  title = ""  img ={logo3}/>
        </div>
        <div className="post-articles">
          <Postarticles name = "nguyenlong"  title = ""  img ={logo5}/>
        </div>
        <div className="post-articles">
          <Postarticles name = "nguyenlong"  title = ""  img ={logo3}/>
        </div>
        <div className="post-articles">
          <Postarticles name = "nguyenlong"  title = ""  img ={logo5}/>
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
