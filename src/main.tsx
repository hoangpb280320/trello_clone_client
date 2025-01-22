import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import ls from "localstorage-slim";
import { secretKey } from "./configs/configEnv/index.ts";

import "./styles/global.scss";

ls.config.encrypt = true;
ls.config.secret = secretKey;
ls.config.ttl = 3600;

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}
