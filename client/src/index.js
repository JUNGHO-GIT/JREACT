// @ts-nocheck
import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./core/App.js";
import reportWebVitals from "./settings/reportWebVitals";
import "./index.css";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
reportWebVitals();