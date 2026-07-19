import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/home.css";
import "./styles/women.css";
import "./styles/men.css";
import "./styles/animations.css";

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
