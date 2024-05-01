import React, { useState } from 'react';

import { Link } from 'react-scroll'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { id: 1, name: 'Home', to: 'home' },
    { id: 2, name: 'About Us', to: 'about' },
    { id: 3, name: 'Services', to: 'services' },
    { id: 4, name: 'Contact', to: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black text-white py-4 font-nueu  ">
    <div className="w-full md:w-4/5 mx-auto px-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Armed Force Zone</h1>
      {/* Responsive Navigation Menu */}
      <button
        className="block lg:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 6h18v-2h-18v2zm18 5h-18v2h18v-2zm0 7h-18v2h18v-2z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v-2h-16v2zm0 6h16v-2h-16v2zm16 7h-16v2h16v-2z"
            />
          )}
        </svg>
      </button>
      {/* Navigation Links */}
      <nav className={`fixed right-0 top-0 h-full w-64 z-50 bg-black text-white transition-transform duration-200 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 lg:static lg:h-auto lg:bg-transparent lg:w-auto lg:flex lg:items-center`}>
        <button
          className="block lg:hidden focus:outline-none bg-white text-2xl rounded-full w-12 h-12 text-black font-bold absolute top-4 right-4"
          onClick={toggleMenu}
        >
         x
        </button>
        <ul className="text-center lg:flex lg:space-x-4 lg:mx-auto lg:my-0 lg:py-0 flex md:flex-row flex-col justify-center">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="block py-4 px-2 hover:text-gray-400 text-5xl md:text-lg"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Header;
