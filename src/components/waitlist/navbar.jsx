import React from "react";

function Navbar() {
  return (
    <section className="h-[5rem] bg-white items-center">
      <nav className="flex items-center h-full w-full  md:w-10/12 mx-3 md:mx-auto flex justify-between items-center">
        <h1 className="font-extrabold text-3xl text-slate-900">Gofitish</h1>
        <ul className="hidden md:flex justify-between items-center text-slate-900">
          <li className="mr-4">
            <a href="#" className="text-white text-slate-900">
              Home
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-white text-slate-900">
              About
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-white text-slate-900">
              Services
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-white text-slate-900">
              FAQ
            </a>
          </li>
        </ul>
        <button className="bg-slate-900 text-amber-500 text-normal font-bold py-2 px-4 rounded uppercase">
          Join Waitlist
        </button>
      </nav>
    </section>
  );
}

export default Navbar;
