import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { AuthProvider } from "../contexts/UserAuthContext";

// import { AdminAuthProvider } from "../contexts/AdminAuthContext";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
