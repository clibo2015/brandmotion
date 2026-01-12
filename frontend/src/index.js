import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
import { trackWebVitals, preloadCriticalResources, registerServiceWorker } from "./utils/performance";

// Initialize performance optimizations
preloadCriticalResources();
registerServiceWorker();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Track web vitals for performance monitoring
trackWebVitals();
