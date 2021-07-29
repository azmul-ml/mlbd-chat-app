import React from "react";
import { hot } from "react-hot-loader/root";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./app/store";
import ROUTES from "./routes/Routes";
import { RenderRoutes } from "./routes";

import MainLayout from "./features/chat-window/MainLayout";

// import "./App.css";
let persistor = persistStore(store);

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <RenderRoutes routes={ROUTES} />
        {/* <MainLayout /> */}
      </div>
    </PersistGate>
  );
}

export default hot(App);
