import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import NavItem from "./NavItem";
import {
  MdHome,
  MdInventory,
  MdShoppingCart,
  MdPayment,
  MdBarChart,
  MdLocalShipping,
  MdLogout,
} from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#1A1A1A] h-screen flex flex-col p-6 text-white border-r border-gray-800">
      <Logo />

      <nav className="flex-1 space-y-1 mt-10">
        <NavLink to="/">
          <NavItem label="Home" icon={<MdHome size={22} />} />
        </NavLink>
        <NavLink to="/products">
          <NavItem label="Product" icon={<MdInventory size={22} />} />
        </NavLink>
        <NavLink to="/orders">
          <NavItem label="Order" icon={<MdShoppingCart size={22} />} />
        </NavLink>
        <NavLink to="/payment">
          <NavItem label="Payment" icon={<MdPayment size={22} />} />
        </NavLink>
        <NavLink to="/statistics">
          <NavItem label="Statistics" icon={<MdBarChart size={22} />} />
        </NavLink>
        <NavLink to="/shipping">
          <NavItem label="Shipping" icon={<MdLocalShipping size={22} />} />
        </NavLink>
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-800">
        <NavLink
          to="/login"
          className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-white transition-colors"
        >
          <MdLogout size={22} /> <span>Log Out</span>
        </NavLink>
      </div>
    </div>
  );
}
