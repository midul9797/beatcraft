"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-main-dark sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-main-light">
          <a href="#hero">Beatcraft</a>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#why-customize"
            className="text-main-light relative w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-main-light after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            Features
          </a>

          <a
            href="#customize"
            className="text-main-light relative w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-main-light after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            Customize
          </a>
          <a
            href="#faq"
            className="text-main-light relative w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-main-light after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            FAQs
          </a>

          {/* Call-to-Action Button */}
          <a
            href="#cta"
            className="bg-main-light text-main-dark px-4 py-2 rounded hover:bg-opacity-30 hover:text-main-light transition duration-300"
          >
            Login
          </a>
          <a
            href="#cta"
            className="bg-main-light text-main-dark px-4 py-2 rounded hover:bg-opacity-30 hover:text-main-light transition duration-300"
          >
            Signup
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-main-light focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-main-dark shadow-lg`}
      >
        <a
          href="#features"
          className="block mx-auto text-main-light px-4 py-2 relative w-fit after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-main-light after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          Features
        </a>
        <a
          href="#customize"
          className="block mx-auto text-main-light px-4 py-2 relative w-fit after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-main-light after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          Customize
        </a>

        <a
          href="#faq"
          className="block mx-auto text-main-light px-4 py-2 relative w-fit after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-main-light after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          FAQs
        </a>

        {/* Mobile CTA Button */}
        <div className="flex flex-col space-y-2 items-center">
          <a
            href="#cta"
            className=" bg-main-light text-main-dark px-4 py-2 mt-2 rounded hover:bg-opacity-30 hover:text-main-light transition duration-300"
          >
            Login
          </a>
          <a
            href="#cta"
            className=" bg-main-light text-main-dark px-4 py-2 mt-2 rounded hover:bg-opacity-30 hover:text-main-light transition duration-300"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
