import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 py-4 text-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src="/logo192.png" alt="Logo" className="h-10" />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-400">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
