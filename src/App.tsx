import React from "react";
import ROUTES from "./routes/Routes";
import { RenderRoutes } from "./routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <RenderRoutes routes={ROUTES} />
      {/* <MainLayout /> */}
    </div>
  );
}

export default App;
