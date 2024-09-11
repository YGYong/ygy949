import { Input, Avatar } from "antd";
import {
  DownloadOutlined,
  SearchOutlined,
  BulbOutlined,
  HeartOutlined,
  MessageOutlined,
  ReadOutlined,
  UserOutlined,
  StockOutlined,
} from "@ant-design/icons";
import headerBg from "@/assets/videos/headerBg.mp4";
import "./index.less";
import avatar from "@/assets/images/header/avatar.jpg";
// 左侧功能
const sideContent = [
  { id: "1", title: "首页", path: "/" },
  { id: "2", title: "番剧", path: "/about" },
  { id: "3", title: "直播", path: "/liveBroadcast" },
  { id: "4", title: "游戏中心", path: "/gamesCenter" },
  { id: "5", title: "会员购", path: "/memberPurchase" },
  { id: "6", title: "漫画", path: "/caricature" },
  { id: "7", title: "赛事", path: "/competition" },
  // { id: '8', title: '', path: '/ygyong' },
  {
    id: "9",
    title: "下载客户端",
    icon: "<el-icon><Download /></el-icon>",
    path: "/downloadClient",
  },
];
// 右侧功能
const rightContent = [
  { id: "1", title: "大会员", icon: <UserOutlined />, path: "/megaMember" },
  { id: "2", title: "消息", icon: <MessageOutlined />, path: "/info" },
  { id: "3", title: "动态", icon: <BulbOutlined />, path: "/dynamicState" },
  { id: "4", title: "收藏", icon: <HeartOutlined />, path: "/star" },
  { id: "5", title: "历史", icon: <StockOutlined />, path: "/history" },
  {
    id: "6",
    title: "创作中心",
    icon: <ReadOutlined />,
    path: "/creativeCenter",
  },
  { id: "7", title: "投稿", path: "/contribute" },
];
export default function BiliPage() {
  return (
    <div className="relative top-0 left-0 h-[180px] min-w-[1180px]">
      <video
        className="absolute top-0 left-0 -z-1 w-[100%]"
        src={headerBg}
        autoPlay
        muted
        loop
      ></video>
      <div className="flex flex-nowrap px-2 pt-4">
        <div className="common_banner w-[480px] mr-6">
          <span className="animate__animated animate__bounce animate__infinite animate-duration-1.5s text-[20px]">
            YGYong
          </span>
          {sideContent.map((item) => (
            <div key={item.id} className="common_banner">
              {item.icon && <DownloadOutlined className="mr-1 align-middle" />}
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <Input
          size="small"
          suffix={<SearchOutlined />}
          className="flex-1 opacity-70"
          placeholder="Please Input"
        />
        <div className="common_banner w-[33%] ml-6">
          <Avatar src={avatar}></Avatar>
          {rightContent.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
