import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { BrowserRouter } from "react-router";
import { SnackbarProvider } from "notistack";
import App from "./App.tsx";

import "./styles/global.scss";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Provider store={store}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SnackbarProvider>
      </Provider>
    </StrictMode>
  );
}
