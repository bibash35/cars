import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import re from "../assets/re.png"
const Header = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="flex justify-between items-center h-20 p-4 bg-red-600 text-white">
      <div className="logo">
        <Link to="/">
          <img
            src={re}  
            alt="Car Marketplace Logo"
            className=" h-40 w-auto object-contain"  
          />
        </Link>
      </div>

      {/* Centered Search Bar with adjusted width */}
      <div className="relative flex-1 mx-8">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search Cars by Brand/Model"
          className="w-65 max-w-sm p-2 pl-10 rounded-md bg-red-500 text-white border border-red-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
      </div>

      {/* Navbar Links on the right */}
      <nav>
        <ul className="flex space-x-8">
          <li><Link to="/buy" className="hover:text-yellow-400">Buy a Car</Link></li>
          <li><Link to="/sell" className="hover:text-yellow-400">Sell a Car</Link></li>
          <li><Link to="/login" className="hover:text-yellow-400">Login</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
