import {
  Home,
  ShoppingBag,
  LayoutDashboard,
  User,
} from "lucide-react";

import NavItem from "./NavItem";
import FloatingActionButton from "./FloatingActionButton";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t flex justify-between px-8 py-2">
      <NavItem to="/home" label="Home" icon={Home} />
      <NavItem to="/shop" label="Shop" icon={ShoppingBag} />
      <FloatingActionButton />
      <NavItem to="/dashboard" label="Dashboard" icon={LayoutDashboard} />
      <NavItem to="/account" label="Account" icon={User} />
    </div>
  );
}
