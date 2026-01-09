import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <ul className="flex flex-col md:flex-row md:space-x-8 items-center text-white">
      <li>
        <a
          href="#home"
          className="transition duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white hover:scale-105"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="transition duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white hover:scale-105"
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="transition duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white hover:scale-105"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#experience"
          className="transition duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white hover:scale-105"
        >
          Work Experience
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="transition duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white hover:scale-105"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="transition duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white hover:scale-105"
        >
          Contact
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="h-20 w-full flex items-center bg-slate-950 px-4 sticky top-0 z-50">
      <div className="flex w-full items-center justify-between">
        {/* Logo or Brand (optional) */}
        <div className="whitespace-nowrap text-white font-bold text-xl">
          Alok Sisodiya
        </div>
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-center w-full">{navLinks}</div>
        {/* Hamburger Button */}
        <button
          className="md:hidden flex items-center justify-center text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-4 bg-slate-950 rounded-xl shadow-lg p-6 z-50 w-60 flex flex-col items-center md:hidden">
          {navLinks}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
