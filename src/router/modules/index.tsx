import { Navigate } from "react-router-dom";
import React from "react";
import lazyLoad from "@/router/utils/lazyLoad";
export const routes = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: lazyLoad(React.lazy(() => import("@/views/login"))),
  },
  {
    path: "*",
    element: lazyLoad(React.lazy(() => import("@/views/404"))),
  },
  {
    path: "/ygyong",
    element: lazyLoad(React.lazy(() => import("@/layout"))),
    children: [
      {
        path: "home",
        element: lazyLoad(React.lazy(() => import("@/views/home"))),
        meta: {
          title: "首页",
        },
      },
      {
        path: "introduce",
        element: lazyLoad(React.lazy(() => import("@/views/introduce"))),
        meta: {
          title: "React基础",
        },
      },
      {
        path: "largeScreen",
        element: lazyLoad(React.lazy(() => import("@/views/largeScreen"))),
        meta: {
          title: "大屏",
        },
      },
      {
        path: "about",
        element: lazyLoad(React.lazy(() => import("@/views/about"))),
        meta: {
          title: "功能",
        },
      },
      {
        path: "connection",
        element: lazyLoad(React.lazy(() => import("@/views/connection"))),
        meta: {
          title: "联系我们",
        },
      },
      {
        path: "tool",
        element: lazyLoad(React.lazy(() => import("@/views/tool"))),
        meta: {
          title: "关于",
        },
      },
    ],
  },
  {
    path: "bilibili",
    element: lazyLoad(React.lazy(() => import("@/views/bilibili"))),
  },
  {
    path: "three",
    element: lazyLoad(React.lazy(() => import("@/views/three"))),
  },
];
