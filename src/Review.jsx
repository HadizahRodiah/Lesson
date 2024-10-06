import React, { useState, useEffect } from 'react';
import * as Icons from 'react-bootstrap-icons';


const parents = [
  {
    id: 1,
    name: "John Doe",
    review: "Amazing service! The user interface exceeded my expectations. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Great customer support and the quality is top-notch. Will definitely collaborate again!",
    rating: 4,
  },
  {
    id: 3,
    name: "Sam Wilson",
    review: "Satisfied with my purchase. Delivery was on time and the product was as described.",
    rating: 4,
  },
  {
    id: 4,
    name: "Alex Johnson",
    review: "Good value for the price, but could improve packaging. Overall happy with the service.",
    rating: 3,
  },
];
const students = [
    {
      id: 1,
      name: "John Doe",
      review: "Amazing service! The user interface exceeded my expectations. Highly recommend!",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "Great customer support and the quality is top-notch. Will definitely collaborate again!",
      rating: 4,
    },
    {
      id: 3,
      name: "Sam Wilson",
      review: "Satisfied with my purchase. Delivery was on time and the product was as described.",
      rating: 4,
    },
    {
      id: 4,
      name: "Alex Johnson",
      review: "Good value for the price, but could improve packaging. Overall happy with the service.",
      rating: 3,
    },
  ];
  

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next review
  const nextParent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % parents.length);
  };
  const nextStudent =()=>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
  };

  // Automatically slide the reviews every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextParent();
      nextStudent();
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="w-full bg-gray-100 text-center p-20 " id='reviews'>
      <h2 className="text-4xl font-bold mb-6 text-black">Reviews</h2>

      <div className="relative flex flex-col md:flex-row items-center justify-between px-5 mb-5">
        {/* Slide transition parents */}
        <div className="bg-green-700 mb-10 hover:bg-orange-500 hover:text-black text-white p-4 m-2 rounded-lg shadow-lg max-w-md transition-all duration-500 ease-in-out transform">
        <h2 className="text-4xl font-bold mb-6 text-slate-900">Parents</h2>
        <div className='justify-center item-center flex'>
        <Icons.PersonFill className='text-slate-900 ' width={60} height={60}/>
        </div>
          <p className="italic text-xl">"{parents[currentIndex].review}"</p>
          <p className="mt-4 font-semibold text-white">- {parents[currentIndex].name}</p>
          <div className="mt-2 text-yellow-400 flex flex-row justify-center">
            {Array(parents[currentIndex].rating).fill(<Icons.StarFill width={40} className='text-slate-900'/>)}
          </div>
          {/* Indicators parent */}
      <div className="flex justify-center mt-6 space-x-2">
        {parents.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-colors duration-500 ${
              index === currentIndex ? 'bg-white' : 'bg-indigo-300'
            }`}
          ></span>
        ))}
      </div>
        </div>
        {/*slide for students */}
        <div className="bg-green-700 hover:bg-orange-500 mb-10 hover:text-black text-white p-4 m-2 rounded-lg shadow-lg max-w-md transition-all duration-500 ease-in-out transform">
        <h2 className="text-4xl font-bold mb-6 text-slate-900">Students</h2>
        <div className='justify-center item-center flex'>
        <Icons.PersonFill className='text-slate-900 ' width={60} height={60}/>
        </div>
          <p className="italic text-xl">"{students[currentIndex].review}"</p>
          <p className="mt-4 font-semibold text-white">- {students[currentIndex].name}</p>
          <div className="mt-2 text-yellow-400 flex flex-row justify-center">
            {Array(students[currentIndex].rating).fill(<Icons.StarFill width={40} className='text-slate-900'/>)}
          </div>
          {/* Indicators students */}
       <div className="flex justify-center mt-6 space-x-2">
        {students.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-colors duration-500 ${
              index === currentIndex ? 'bg-white' : 'bg-indigo-300'
            }`}
          ></span>
        ))}
      </div>

        </div>
      </div>

    </div>
  );
};

export default Review;
