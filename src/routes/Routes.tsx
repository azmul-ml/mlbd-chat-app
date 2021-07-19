import { Redirect } from "react-router";
import cookie from "react-cookies";

import Login from "../features/auth/components/Login";
import Register from "../features/auth/components/Register";
import MainLayout from "../features/chat-window/MainLayout";
import MainWindow from "../features/chat-window/MainWindow";
import { AUTH_ACCESS_TOKEN } from "../features/auth/constants/auth.keys";
import { RenderRoutes } from ".";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: Login },
  { path: "/register", key: "REG", component: Register },
  {
    path: "/app",
    key: "APP",
    component: (props: any) => {
      if (!cookie.load(AUTH_ACCESS_TOKEN)) {
        alert("Login Please");
        return <Redirect to={"/"} />;
      }
      return <RenderRoutes {...props} />;
    },
    routes: [
      {
        path: "/app",
        key: "APP_ROOT",
        exact: true,
        component: MainLayout,
      },
      {
        path: "/app/chat",
        key: "APP_CHAT",
        exact: true,
        component: MainWindow,
      },
    ],
  },
];

export default ROUTES;
