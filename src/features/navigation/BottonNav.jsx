import { Home, ShoppingBag, LayoutDashboard, User, Plus } from "lucide-react";

import NavItem from "./NavItem";
import FloatingActionButton from "./FloatingActionButton";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t flex justify-between px-8 py-2">
      <NavItem to="/home" label="Home" icon={Home} />
      <NavItem to="/shop" label="Shop" icon={ShoppingBag} />
      {/* <FloatingActionButton />
       */}
      <button
        
        className="bg-orange-500 text-white w-14 h-14 rounded-full -mt-8 flex items-center justify-center shadow-lg"
      >
        <Plus size={28} />
      </button>
      <NavItem to="/dashboard" label="Dashboard" icon={LayoutDashboard} />
      <NavItem to="/account" label="Account" icon={User} />
    </div>
  );
}
