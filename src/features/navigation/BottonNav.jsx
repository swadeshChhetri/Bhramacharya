import { Home, ShoppingBag, IndianRupee, User, Plus } from "lucide-react";

import NavItem from "./NavItem";
import FloatingActionButton from "./FloatingActionButton";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t">
      <div className="grid grid-cols-5 items-center h-16 text-gray-700">
        <NavItem to="/home" label="Home" icon={Home} />
        <NavItem to="/shop" label="Shop" icon={ShoppingBag} />

        {/* Center FAB */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/create-post")}
            className="bg-orange-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg -mt-6"
          >
            <Plus size={26} />
          </button>
        </div>

        <NavItem to="/funding" label="Funding" icon={IndianRupee} />
        <NavItem to="/account" label="Accounts" icon={User} />
      </div>
    </div>
  );
}
