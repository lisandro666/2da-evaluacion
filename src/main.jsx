import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
