import React from "react";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Task Dashboard</h1>
      <ProfileDropdown />
    </header>
  );
};

export default Navbar;
