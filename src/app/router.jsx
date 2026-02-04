import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../features/home/HomePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/shop" element={<div>Shop</div>} />
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="/account" element={<div>Account</div>} />
    </Routes>
  );
}
