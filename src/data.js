import { FaUserCircle } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { MdSaveAlt } from "react-icons/md";
import { AiTwotoneDownCircle } from "react-icons/ai";
import styled from "styled-components";

export const users = [
  {
    id: 1,
    username: "Nguyễn Hữu Long",
    email: "Nguyenlong@gmail.com",
    image:
      "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-con-gai-1-1.jpg",
    round: "",
  },
  {
    id: 2,
    username: "Nguyễn Hữu Giang",
    email: "Nguyenlong@gmail.com",
    image: "https://live.staticflickr.com/65535/50057895057_d712b724e8_z.jpg",
  },
  {
    id: 3,
    username: "Nguyễn Thị Phương",
    email: "Nguyenlong@gmail.com",
    image:
      "https://i.pinimg.com/564x/e4/7d/3c/e47d3cc028272905c14993deef6b68bf.jpg",
  },
  {
    id: 4,
    username: "Lê thị Trang",
    email: "Nguyenlong@gmail.com",
    image:
      "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-con-gai-1-1.jpg",
  },
  {
    id: 5,
    username: "Nguyễn Hoàng Linh",
    email: "Nguyenlong@gmail.com",
    image:
      "https://cdn.aicschool.edu.vn/wp-content/uploads/2024/05/anh-gai-dep-tu-nhien-1.jpg",
  },
  {
    id: 6,
    username: "Nguyễn Thị Hoa",
    email: "Nguyenlong@gmail.com",
    image:
      "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/anh-gai-dep-de-thuong.jpg",
  },
  {
    id: 7,
    username: "Đỗ Thùy Linh",
    email: "Nguyenlong@gmail.com",
    image:
      "https://cdn.thoitiet247.edu.vn/wp-content/uploads/2024/04/anh-nu-de-thuong-1.jpg",
  },
  {
    id: 8,
    username: "Nguyễn Quang Dũng",
    email: "Nguyenlong@gmail.com",
    image: "https://live.staticflickr.com/65535/51988206348_e72992b30c_k.jpg",
  },
  {
    id: 9,
    username: "Nguyễn Trang Nghĩa",
    email: "Nguyenlong@gmail.com",
    image:
      "https://top10tphcm.com/wp-content/uploads/2024/04/hinh-anh-gai-xinh-han-quoc-dep-nhat-01.jpg",
  },
  {
    id: 10,
    username: "Lê Đức Phúc",
    email: "Nguyenlong@gmail.com",
    image:
      "https://cdn.thoitiet247.edu.vn/wp-content/uploads/2024/04/anh-nu-de-thuong-1.jpg",
  },
  {
    id: 11,
    username: "Vũ Thị Kiêm Tuyến",
    email: "Nguyenlong@gmail.com",
    image:
      "https://cdn.thoitiet247.edu.vn/wp-content/uploads/2024/04/anh-nu-de-thuong-1.jpg",
  },
  {
    id: 12,
    username: "Nguyễn Thị Bình",
    email: "Nguyenlong@gmail.com",
    image:
      "https://cdn.thoitiet247.edu.vn/wp-content/uploads/2024/04/anh-nu-de-thuong-1.jpg",
  },
  {
    id: 13,
    username: "Lê Ngọc Nhân",
    email: "Nguyenlong@gmail.com",
    image:
      "https://cdn.thoitiet247.edu.vn/wp-content/uploads/2024/04/anh-nu-de-thuong-1.jpg",
  },
  {
    id: 14,
    username: "Nguyễn Thế Nghĩa",
    email: "Nguyenlong@gmail.com",
    image:
      "https://cdn.thoitiet247.edu.vn/wp-content/uploads/2024/04/anh-nu-de-thuong-1.jpg",
  },
];

export const Loitat = [
  {
    id: 1,
    ground: "Làng chuế thôn 1",
    img: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/73375506_1259203384282267_9180824067891003392_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=25d718&_nc_ohc=6gYurRLsSK8Q7kNvgEYvO_5&_nc_ht=scontent.fhan4-1.fna&oh=00_AYD99tSKvMMZwh3ZHu1UcUDHT2hYHE4uWhAE8aNhhh9C4A&oe=66DD3E7A",
  },
  {
    id: 2,
    ground: "Makeup Stylist",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CFp3lpsQgrk_l-OydQ6lax_5mW4DplcYg&s",
  },
  {
    id: 3,
    ground: "Nhóm Tiến lên miền nam",
    img: "https://play-lh.googleusercontent.com/ID3Bveyi8NPsN4VVXZZJktt_iX0MkRtktZO-Oxprho_nPAR-hoCe2DHm4kM-ILHUJA",
  },
  {
    id: 4,
    ground: "Nhóm Dev ơi mình đi đâu ?",
    img: "https://play-lh.googleusercontent.com/ID3Bveyi8NPsN4VVXZZJktt_iX0MkRtktZO-Oxprho_nPAR-hoCe2DHm4kM-ILHUJA",
  },
  {
    id: 5,
    ground: "Đại học công nghiệp việt hung",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV501m4voRtu6jLdaIJvIdaReo4o_SFOT-jA&s",
  },
];

export const story = [
  {
    id: 1,
    image:
      "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-con-gai-1-1.jpg",
    name: "Nguyễn Phương",
  },
  {
    id: 2,
    image:
      "https://cdn.thoitiet247.edu.vn/wp-content/uploads/2024/04/nhung-hinh-anh-girl-xinh-de-thuong.webp",
    name: "Bảo Thanh",
  },
  {
    id: 3,
    image:
      "https://likevape.vn/wp-content/uploads/2023/08/21205817-hinh-anh-gai-xinh-11.jpg",
    name: "Nguyễn Quang Dũng",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/d6/4f/57/d64f573f281b9f9e3eaa47742b386571.jpg",
    name: "Nguyễn Phương",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/736x/d6/4f/57/d64f573f281b9f9e3eaa47742b386571.jpg",
    name: "Đỗ Thùy Linh",
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/736x/d6/4f/57/d64f573f281b9f9e3eaa47742b386571.jpg",
    name: "Nguyễn Trang Nghĩa",
  },
];

export const posts = [
  {
    id: 1,
    avatar:
      "https://i.pinimg.com/736x/d6/4f/57/d64f573f281b9f9e3eaa47742b386571.jpg",
    img: "https://i.pinimg.com/736x/d6/4f/57/d64f573f281b9f9e3eaa47742b386571.jpg",
    title:
      "Có những ngày tháng sống bình lặng giữa cuộc đời, tình yêu không còn quan trọng nữa! Có ai đó quan tâm hay không quan trọng, bản thân vẫn tự có thể đối đãi tốt với chính mình!",
    name: "Nguyen Long",
  },
  {
    id: 2,
    avatar:
      "https://i.pinimg.com/736x/d6/4f/57/d64f573f281b9f9e3eaa47742b386571.jpg",
    img: [
      "https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg",
      "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-con-gai-1-1.jpg",
      "https://vcdn1-dulich.vnecdn.net/2021/07/16/9-1626444968.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=cNm75vOPmq_zpO_7CibDUg",
      "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg",
    ],
    title:
      "Đừng kì vọng vào người khác. Có lỡ kì vọng, hãy kì vọng vào chính mình.",
    name: "Nguyen phương",
  },
  {
    id: 3,
    avatar:
      "https://i.pinimg.com/736x/d6/4f/57/d64f573f281b9f9e3eaa47742b386571.jpg",
    img: [
      "https://i.pinimg.com/736x/d6/4f/57/d64f573f281b9f9e3eaa47742b386571.jpg",
      "https://photo.znews.vn/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg",
    ],
    title:
      "Sau này mình già đi, trí nhớ chỉ vỏn vẹn vài khoảnh khắc, liệu chúng ta sẽ nhớ điều gì?",
    name: "Nguyen thị linh",
  },
  {
    id: 4,
    avatar:
      "https://i.pinimg.com/736x/d6/4f/57/d64f573f281b9f9e3eaa47742b386571.jpg",
    img: "https://i.pinimg.com/736x/d6/4f/57/d64f573f281b9f9e3eaa47742b386571.jpg",
    title:
      "Thử thách đối với người tiêu cực là áp lực, đối với người tích cực là động lực.",
    name: "Lê thị trang",
  },
];

const StyledIcon1 = styled(FaUserCircle)`
  color: #1a80f4;
`;
const StyledIcon2 = styled(FaUserFriends)`
  color: #1a80f4;
`;
const StyledIcon3 = styled(FaUserCircle)`
  color: #238ee8;
`;
const StyledIcon4 = styled(FaUsers)`
  color: #9f58ea;
`;
const StyledIcon5 = styled(CiShop)`
  color: #1a80f4;
`;
const StyledIcon6 = styled(MdOutlineOndemandVideo)`
  color: #1877f2;
`;
const StyledIcon7 = styled(GoClockFill)`
  color: #228ee5;
`;
const StyledIcon8 = styled(MdSaveAlt)`
  color: #5d98de;
`;
const StyledIcon9 = styled(AiTwotoneDownCircle)`
  color: #050505;
`;

export const leftdata = [
  {
    id: 1,
    icon: StyledIcon1,
    name: "Nguyễn long",
  },
  {
    id: 2,
    icon: StyledIcon2,
    name: "Bạn bè",
  },
  {
    id: 3,
    icon: StyledIcon3,
    name: "Bảng Feed",
  },
  {
    id: 4,
    icon: StyledIcon4,
    name: "Bảng Feed",
  },
  {
    id: 5,
    icon: StyledIcon5,
    name: "Maketplace",
  },
  {
    id: 6,
    icon: StyledIcon6,
    name: "Video",
  },
  {
    id: 7,
    icon: StyledIcon7,
    name: "Kỷ niệm",
  },
  {
    id: 8,
    icon: StyledIcon8,
    name: "Đã lưu",
  },
  {
    id: 9,
    icon: StyledIcon9,
    name: "Xem thêm",
  },
];
