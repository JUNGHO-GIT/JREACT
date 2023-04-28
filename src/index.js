import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import reportWebVitals from "./settings/reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
reportWebVitals();