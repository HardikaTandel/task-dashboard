import React from "react";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  return (
    <header className="w-full px-6 py-4 bg-gray-700 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">Task Dashboard</h1>
      <ProfileDropdown />
    </header>
  );
};

export default Navbar;
