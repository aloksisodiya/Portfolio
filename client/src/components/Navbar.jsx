import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const resumePath = "/resume.pdf";

  const navLinks = (
    <ul className="flex flex-col md:flex-row md:space-x-8 items-center text-white">
      <li>
        <a
          href="#home"
          className="transition duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-full hover:bg-[#22385f]/80 hover:text-violet-100 hover:scale-105"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="transition duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-full hover:bg-[#22385f]/80 hover:text-violet-100 hover:scale-105"
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="transition duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-full hover:bg-[#22385f]/80 hover:text-violet-100 hover:scale-105"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#experience"
          className="transition duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-full hover:bg-[#22385f]/80 hover:text-violet-100 hover:scale-105"
        >
          Work Experience
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="transition duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-full hover:bg-[#22385f]/80 hover:text-violet-100 hover:scale-105"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="transition duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-full hover:bg-[#22385f]/80 hover:text-violet-100 hover:scale-105"
        >
          Contact
        </a>
      </li>
      {/* Resume button moved to right side - intentionally left out from primary nav list */}
    </ul>
  );

  return (
    <nav className="h-20 w-full flex items-center bg-[#081126]/35 backdrop-blur-md border-b border-[#32476b]/50 px-4 sticky top-0 z-50 shadow-[0_10px_30px_rgba(8,17,38,0.25)]">
      <div className="flex w-full items-center justify-between">
        {/* Logo or Brand (optional) */}
        <div className="whitespace-nowrap text-white font-bold text-xl">
          Alok Sisodiya
        </div>
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-center w-full">{navLinks}</div>
        {/* Right-side Resume CTA for desktop (opens in new tab) */}
        <div className="hidden md:flex items-center ml-4">
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v12m0 0l-4-4m4 4l4-4M21 21H3"
              />
            </svg>
            <span className="font-medium">Resume</span>
          </a>
        </div>
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
        <div className="absolute top-20 right-4 bg-[#0d1b39]/95 backdrop-blur-md border border-[#32476b] rounded-xl shadow-lg p-6 z-50 w-60 flex flex-col items-center md:hidden">
          {navLinks}
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v12m0 0l-4-4m4 4l4-4M21 21H3"
              />
            </svg>
            <span className="font-medium">Resume</span>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
