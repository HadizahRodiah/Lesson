import { useEffect } from 'react';
import React, { useState } from 'react';
import Img1 from './assets/Img1.jpg';
import Img2 from './assets/Img2.jpg';
import Img3 from './assets/Img3.jpg';
import Img4 from './assets/Img4.jpg';
import Nav from './Nav.jsx';

const homes = [
    {
        id: 1,
        img: Img1,
        words: 'Bringing school Home',
    },
    {
        id: 2,
        img: Img2,
        words: 'The best time to start is now',
    },
    {
        id: 3,
        img: Img3,
        words: 'Work hard, pays Hard',
    },
    {
        id: 4,
        img: Img4,
        words: "Education is the best Legacy",
    },
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the next home
    const nextHome = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % homes.length);
    };

    // Automatically slide the homes every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextHome();
        }, 3000); // Slide every 3 seconds
        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    return (
           <div className='bg-gray-200 overflow-hidden h-screen w-screen relative w-full' id='home'>
            <Nav/>
                                    {/*screen image */}
                <div className='grid w-screen md:grid-cols-2'>
                    <div className='grid grid-col-1 h-screen  hidden md:block'>
                      <div className='bg-gray-200 m-20 h-screen rounded-lg w-96 flex flex-col justify-center items-center'>
                     <button className='bg-green-700 p-5 rounded-lg shadow-lg'> <h2 className='text-white text-2xl font-bold '>{homes[currentIndex].words}</h2> </button>
                     <p className='italic font-bold p-6 text-lg text-black'>
              There is nothing serious about this website.Contact the developer for future Collaboration.
              check the <span><a href='#service' className='underline font-bold text-green-700 font-bold'>Services</a></span> we offer that makes us stands out,we ensure premium--satisfaction
            </p>      <div className='flex flex-row items-center justify-center mt-2'>
        <a
          href="#reviews"
          className='font-bold bg-green-700 text-white mx-2 mb-2 hover:text-black hover:bg-transparent border hover:border-orange-500 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg'
          download
        >
          Reviews
        </a>
        <a
          href='#footer'
          className='font-bold bg-orange-500 text-white mx-2 mb-2 hover:text-black hover:bg-transparent border hover:border-green-900 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg'
        >
          Contact
        </a>
      </div>

                      </div>                        
                    </div>
                    {/*screen image */}
                    <div className='grid grid-col-1  h-screen'>
                        <img 
                            src={homes[currentIndex].img} 
                            alt={`Slide ${homes[currentIndex].id}`} 
                            className="object-contain max-w-full max-h-full absolute" 
                        />
                        {/*mobile screen */}
                        <div className="m-20 text-black flex flex-col justify-center items-center z-40 md:hidden">
                        <button className=' mt-10 bg-white bg-opacity-20 border border-green-700 hover:bg-green-900 text-black p-2 rounded-lg shadow-lg'> <h3 className='text-black hover:text-white font-bold '>{homes[currentIndex].words}</h3></button>
                        <p className='italic bg-gray-300 bg-opacity-30 font-bold p-6 text-sm  text-black'>
              There is nothing serious about this website.Contact the developer for future Collaboration.
              check the <span><a href='#service' className='underline text-green-700'>Services</a></span> we offer that makes us stands out,we ensure premium--satisfaction
            </p>
            <div className='flex flex-row md:hidden items-center justify-center mt-2'>
        <a
          href="#reviews"
          className='font-bold bg-green-700 text-white mx-2 mb-2 hover:text-black hover:bg-transparent border hover:border-orange-500 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg'
          
        >
          Reviews
        </a>
        <a
          href='#footer'
          className='font-bold bg-orange-500 text-white mx-2 mb-2 hover:text-black hover:bg-transparent border hover:border-green-900 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg'
        >
          Contact
        </a>
      </div>

                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Home;
