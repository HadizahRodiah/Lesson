import React, { useState } from 'react';
import * as Icons from 'react-bootstrap-icons';

const Accord = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (panel) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      {/* Accordion Item 1 */}
      <h1 className='flex text-orange-500 justify-center mb-2 items-center text-2xl font-bold'>Web Development</h1>
      <div className="border border-orange-500 rounded-lg mb-2">
        <h2 className="bg-green-700 p-4 rounded-t-lg cursor-pointer" onClick={() => togglePanel(1)}>
          <button className="flex font-bold text-slate-900 justify-between w-full text-left">
          <Icons.Code width={20} height={20} className='text-orange-500'/>  Lessson #1
            <span className='text-orange-500 font-bold text-xl'>{openPanel === 1 ? '<' : '>'}</span>
          </button>
        </h2>
        <div className={`overflow-hidden transition-all duration-300 ${openPanel === 1 ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-4 text-black">
          <strong>Lesson One Content.</strong> 
          </div>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="border border-gray-300 rounded-lg mb-2">
        <h2 className="bg-green-700 p-4 rounded-t-lg cursor-pointer" onClick={() => togglePanel(2)}>
          <button className="flex font-bold text-slate-900 justify-between w-full text-left">
          <Icons.Code width={20} height={20} className='text-orange-500'/>  Lessson #2
            <span className='text-orange-500 font-bold text-xl'>{openPanel === 2 ? '<' : '>'}</span>
          </button>
        </h2>
        <div className={`overflow-hidden transition-all duration-300 ${openPanel === 2 ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-4 text-black">
          <strong>Lesson Two Content.</strong> 
          </div>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className="border border-gray-300 rounded-lg mb-2">
        <h2 className="bg-green-700 p-4 rounded-t-lg cursor-pointer" onClick={() => togglePanel(3)}>
          <button className="flex font-bold text-slate-900 justify-between w-full text-left">
          <Icons.Code width={20} height={20} className='text-orange-500'/>  Lessson #3
            <span className='text-orange-500 font-bold text-xl'>{openPanel === 3 ? '<' : '>'}</span>
          </button>
        </h2>
        <div className={`overflow-hidden transition-all duration-300 ${openPanel === 3 ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-4 text-black">
            <strong>Lesson Three Content.</strong> 
          </div>
        </div>
      </div>

      {/* Accordion Item 4 */}
      <div className="border border-gray-300 rounded-lg mb-2">
        <h2 className="bg-green-700 p-4 rounded-t-lg cursor-pointer" onClick={() => togglePanel(4)}>
          <button className="flex font-bold text-slate-900 justify-between w-full text-left">
          <Icons.Code width={20} height={20} className='text-orange-500'/>  Lessson #4
            <span className='text-orange-500 font-bold text-xl'>{openPanel === 4 ? '<' : '>'}</span>
          </button>
        </h2>
        <div className={`overflow-hidden transition-all duration-300 ${openPanel === 4 ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-4 text-black">
          <strong>Lesson Four Content.</strong> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accord;
