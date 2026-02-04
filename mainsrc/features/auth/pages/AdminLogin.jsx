import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../../contexts/AdminAuthContext";
import toast from "react-hot-toast";
import { AdminAuthAPI } from "../../../services/api";
import Button from "./../../../components/common/Button";

const AdminLoginPage = () => {
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await AdminAuthAPI.login(form);
      const { admin, token } = response.data;
      login(admin, token);
      localStorage.setItem("adminToken", token);
      toast.success("Admin Login Successfully!");
      navigate("/admin/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Admin Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-yellow-600">Admin Login</h2>
          <p className="text-gray-600 mt-2">Sign in to manage your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
            value={form.password}
            onChange={handleChange}
            required
          />

          <Button
            color="green"
            size="large"
            onClick={() => console.log("Login clicked")}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
