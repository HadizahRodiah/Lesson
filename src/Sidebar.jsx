import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';

const Sidebar = () => {
  // State to handle dropdown open/close
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-screen w-32 md:w-64 bg-gray-800 text-white flex flex-col p-4">
      {/* Sidebar Header */}
      <div className="mb-8">
        <h1 className=" text-2xl md:text-3xl font-bold text-center">My Courses</h1>
      </div>

      {/* Sidebar Items */}
      <nav className="flex flex-col space-y-4">
        <a href="#dashboard" className="hover:bg-orange-500 p-2 font-bold rounded-lg">
          Dashboard
        </a>

        {/* Dropdown Menu */}
        <div className="flex flex-col">
          <button 
            className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-700 focus:outline-none" 
            onClick={toggleDropdown}
          >
            <span className='font-bold'>Services</span>
            {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </button>

          {/* Dropdown items (visible when isDropdownOpen is true) */}
          {isDropdownOpen && (
            <div className="flex flex-col ml-4 mt-2 space-y-2">
              <a href="#webdev" className="hover:bg-gray-700 p-2 text-sm rounded-lg">Web Dev</a>
              <a href="#seo" className="hover:bg-gray-700 p-2 text-sm rounded-lg">SEO Services</a>
              <a href="#design" className="hover:bg-gray-700 text-sm p-2 rounded-lg">Graphic Design</a>
              <a href="#design" className="hover:bg-gray-700 text-sm p-2 rounded-lg">Graphic Design</a>
              
            </div>
          )}
        </div>

        <a href="#" className="hover:bg-orange-500 p-2 rounded-lg">
          Assessment
        </a>
        <a href="#" className="hover:bg-orange-500 p-2 rounded-lg">
          ClassRoom
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
