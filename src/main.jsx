import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ConfiguratorProvider } from "./components/contexts/configurator";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfiguratorProvider>
      <App />
    </ConfiguratorProvider>
  </React.StrictMode>
);
