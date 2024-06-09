import React from "react";

const Navbar = () => {
  return (
    <div className="bg-red-500 p-4">
      {/* Logo and Links*/}
      <div className="flex gap-2 text-3xl">
        <span>GO</span>
        <span className="font-bold">Food</span>
      </div>
      <div>
        <div>Home</div>
        <div>Groceries</div>
        <div>Pages</div>
      </div>
    </div>
  );
};

export default Navbar;
