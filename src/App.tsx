import React from "react";
import { hot } from "react-hot-loader/root";
import ROUTES from "./routes/Routes";
import { RenderRoutes } from "./routes";

import MainLayout from "./features/chat-window/MainLayout";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <RenderRoutes routes={ROUTES} />
      {/* <MainLayout /> */}
    </div>
  );
}

export default hot(App);
