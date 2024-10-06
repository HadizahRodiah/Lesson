import React from 'react';
import Sidebar from './Sidebar.jsx';
import Accord from './Accord.jsx';

const Class = () => {
  return (
    <div className="relative h-screen flex bg-gray-200" id="class">
      {/* Sidebar will take up a portion of the screen */}
      <div className="w-1/4 h-screen">
        <Sidebar />
      </div>
      {/* Main content area for Accord */}
      <div className="w-3/4 p-10">
        <Accord />
      </div>
    </div>
  );
};

export default Class;
