import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../features/home/HomePage";
import ShopPage from "../features/shop/ShopPage";
import FundingPage from "../features/fund/FundPage";
import AccountPage from "../features/account/AccountPage";
import CreatePostPage from './../features/post/PostPage';


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/create-post" element={<CreatePostPage />} />
      <Route path="/funding" element={<FundingPage />} />
      <Route path="/account" element={<AccountPage/>} />
    </Routes>
  );
}
