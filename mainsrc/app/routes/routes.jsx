import React from "react";
import { Routes, Route } from "react-router-dom";

// Public pages
import Home from "./../../pages/Home";
import Login from "./../../features/auth/pages/Login";
import Signup from "./../../features/auth/pages/Register";
// import SinglePage from "./../../features/news/pages/DetailsPage";
import SearchResults from "./../../features/search/pages/SearchResults";
import NotFound from "../../pages/NotFound";

// Auth
import AdminLoginPage from "./../../features/auth/pages/AdminLogin";
import AdminRegisterPage from "./../../features/auth/pages/AdminRegister";

// Admin
import Dashboard from "./../../features/admin/pages/Dashboard";
import Categories from "./../../features/admin/pages/Category";

// Protected
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import User from "../../features/admin/pages/User";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      {/* <Route path="/news/:id" element={<SingleNewsPage />} /> */}
      <Route path="/search" element={<SearchResults />} />

      {/* Admin Auth (no protection) */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin/register" element={<AdminRegisterPage />} />
      <Route path="/admin/userManagement" element={<User />} />
      {/* <Route path="/admin/userManagement/create" element={<UserForm />} /> */}
      {/* <Route path="/admin/userManagement/edit/:id" element={<UserForm />} /> */}

      {/* Protected Admin */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedAdminRoute>
            <Dashboard />
          </ProtectedAdminRoute>
        }
      />
      {/* <Route
        path="/admin/news"
        element={
          // <ProtectedAdminRoute>
          // <ManageNews />
          // </ProtectedAdminRoute>
        }
      /> */}
      <Route
        path="/admin/category"
        element={
          // <ProtectedAdminRoute>
          <Categories />
          // </ProtectedAdminRoute>
        }
      />
      {/* <Route
        path="/admin/multimedia"
        element={
          // <ProtectedAdminRoute>
          <MultimediaPage />
          // </ProtectedAdminRoute>
        }
      /> */}

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
