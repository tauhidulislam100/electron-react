import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

const element = document.getElementById("root");
if (element == null) {
  throw new Error("Root element not found.");
}

createRoot(element).render(
  <StrictMode>
    <App />
  </StrictMode>
);
