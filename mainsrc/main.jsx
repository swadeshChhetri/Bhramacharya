import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { AuthProvider } from "../contexts/UserAuthContext";

// import { AdminAuthProvider } from "../contexts/AdminAuthContext";
import App from './app/App';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AuthProvider> */}
      {/* <AdminAuthProvider> */}
        <App />
      {/* </AdminAuthProvider> */}
    {/* </AuthProvider> */}
  </StrictMode>
);
