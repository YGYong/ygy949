
// import { useEffect } from "react";
// import { message } from "antd";
import { useLocation } from "react-router-dom";
// import NProgress from "@/config/nprogress";
import "./index.less";
export default function HomePage() {
  const location = useLocation();
  console.log(location);
  // NProgress.start();
  // setTimeout(() => {
  //   NProgress.done();
  // },1000);
  return (
    <div className="home_page">
      <h1>React 18.3.1 + react-router 6.24 + Antd 5.18.3</h1>
      <h2>CRA + craco + TS + less + webpack</h2>
    </div>
  );
}
