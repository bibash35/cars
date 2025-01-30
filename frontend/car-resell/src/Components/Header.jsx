import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

import re from "../assets/re.png";

const Header = () => {
  const [search, setSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 

  useEffect(() => {

//     User clicks anywhere → handleClickOutside is triggered.
// If the click is outside the dropdown, it sets setIsDropdownOpen(false) to close the dropdown.
// If the click is inside the dropdown, nothing happens (the dropdown remains open).
    const handleClickOutside = (event) => {
      // Check if the click happened outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

  // Add an event listener for "mousedown" (click) events
    document.addEventListener('mousedown', handleClickOutside);

  // Clean up the event listener when the component unmounts or when dependencies change
  // The cleanup function removes the event listener to avoid any memory issues.
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false); 
  };

  return (
    <header className="flex justify-between items-center h-18
     p-4 bg-red-600 text-white relative z-30">
      <div className="logo">
        <Link to="/">
          <img src={re} className=" h-40 w-auto object-contain"/>
        </Link>
      </div>

      {/* Centered Search Bar with adjusted width */}
      <div className="relative flex-1 mx-8">
        <input type="text"
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
          <li>
            <Link to="/signup" className="hover:text-yellow-400 flex items-center space-x-1">
              <span>Signup</span>
              <FaRegUserCircle className="text-white transform translate-y-0.5 " />
            </Link>
          </li>

          <li className="relative">
            <button 
              onClick={toggleDropdown} 
              className="hover:text-yellow-400 flex items-center space-x-1">
              <span>More</span>
              <IoMdArrowDropdown className="text-white" />
            </button>
            {isDropdownOpen && (
              <ul ref={dropdownRef} className="absolute -left-14 mt-2 p-2 w-36
               bg-red-600 rounded-md text-white z-40">
                <li ref={dropdownRef}><Link to="/about"  className="block px-4 py-2 hover:text-yellow-400"
                onClick={handleLinkClick}
                >About Us</Link></li>
                <li><Link to="/contact" className="block px-4 py-2 hover:text-yellow-400"
                onClick={handleLinkClick}
                >Contact Us</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
