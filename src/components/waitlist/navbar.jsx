import React from "react";

function Navbar() {
  return (
    <section className="h-[5rem] bg-white items-center">
      <nav className="flex items-center h-full w-11/12  md:w-10/12 mx-auto flex justify-between items-center">
        <h1 className="font-extrabold text-3xl text-slate-900 flex">
          <span className="text-amber-500">Go</span>fitish
        </h1>
        <ul className="hidden md:flex justify-between items-center text-slate-900">
          <li className="mr-4">
            <a
              href="./"
              className="text-white text-slate-900"
              style={{ color: "black" }}
            >
              Home
            </a>
          </li>
          <li className="mr-4 text-slate-900">
            <a
              href="./about"
              className="text-white text-slate-900"
              style={{ color: "black" }}
            >
              About
            </a>
          </li>
          <li className="mr-4">
            <a
              href="#"
              className="text-white text-slate-900"
              style={{ color: "black" }}
            >
              Services
            </a>
          </li>
          <li className="mr-4">
            <a
              href="#"
              className="text-white text-slate-900"
              style={{ color: "black" }}
            >
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
