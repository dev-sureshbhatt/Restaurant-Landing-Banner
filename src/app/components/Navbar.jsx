import React from "react";

const Navbar = () => {
  return (
    <div className="navbar flex mt-5">
      {/* Logo and Links*/}
      <div className="flex mx-16 gap-2 flex-[100%] lg:flex-[65%] justify-between">
        <div className="text-3xl">
        <span>GO</span>
        <span className="font-bold">Food</span>
        </div>
        <div className="flex gap-10 text-sm">
            <div className="cursor-pointer">Home</div>
            <div className="cursor-pointer">Groceries</div>
            <div className="cursor-pointer">Pages</div>
        
      </div>
      </div>
     
      <div className="flex-[40%] text-white">
        <div className="text-sm">Connect with us</div>
      </div>
    </div>
  );
};

export default Navbar;
