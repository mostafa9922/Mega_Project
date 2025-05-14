import { useState } from "react";
import { Card } from "@material-tailwind/react";
import {
  FaFile,
  FaClockRotateLeft,
  FaBars,
  FaChevronLeft,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    { icon: <FaFile />, label: "New Interview", path: "/interview" },
    { icon: <FaClockRotateLeft />, label: "History", path: "/history" },
  ];

  return (
    <Card
      className={` p-4 shadow-xl shadow-blue-gray-900/5 rounded-none bg-white transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}>
      {/* Toggle Button */}
      <div className='flex justify-end mb-6'>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className='text-gray-600 hover:text-blue-600 transition-colors'>
          {collapsed ? <FaBars size={18} /> : <FaChevronLeft size={18} />}
        </button>
      </div>

      {/* Menu Items */}
      <div className='flex flex-col gap-4'>
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 text-base rounded-md transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }>
            <span className='text-xl'>{item.icon}</span>
            {!collapsed && (
              <span className='whitespace-nowrap'>{item.label}</span>
            )}
          </NavLink>
        ))}
      </div>
    </Card>
  );
}
