import React from "react";
import "../styles/style.css";

function Navbar() {
  return (
    <div className="nav-bar fixed w-full bg-[#3853a4]">
      <div className="h-24 flex justify-between items-center">
        <div className="ml-10 h-10">
          <img src="./patco.png" style={{ height: "inherit" }} />
        </div>
        <div className="bg-[#1e1e1e99] p-2 pl-10 rounded-xl rounded-e-none text-white">
          <div className="flex gap-3 text-[10px] fontB">
            <a className="tab" href="#about">
              ABOUT
            </a>
            <a className="tab" href="#process">
              PROCESS
            </a>
            <a className="tab" href="#testimonials">
              TESTIMONIALS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
