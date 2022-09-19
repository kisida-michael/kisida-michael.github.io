
import React from "react";
import mk from "./img/mk.svg";


export const Navbar = () => {
  return (
   
    <header className="absolute top-0 w-screen bg-gradient-to-r from-custom-blue to-[#8E87E9] font-inter">
      <div className="w-full container sticky top-0  p-5 xs:flex items-center ">
        <nav className="md:mr-auto md:ml-1 md:py-1 md:pl-3 	flex items-center text-white ">
        <img src={mk} alt="mk" className="sm: pb-2md:pr-4 w-15 h-8" />
          <div className="w-full ml-5 flex font-medium justify-end">
            <a href="#projects" className="mr-5 hover:text-black">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-black">
            Skills
          </a>
          <a href="#contacts" className="mr-5 hover:text-black">
            Contact
          </a>
          </div>
        </nav>
        
      </div>
    </header>
  );
}