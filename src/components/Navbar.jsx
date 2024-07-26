import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 px-4 py-6">
      <div className="text-3xl sm:flex sm:justify-start sm:gap-8 font-bold">
        <div className="w-auto">
          <Link to="/" className="hover:underline">
            VIDEO GAMES
          </Link>
        </div>
        <div className="w-auto">
          <Link to="/contact" className="hover:underline">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
