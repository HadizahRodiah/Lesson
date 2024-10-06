import React from 'react'
import Tutor1 from './assets/Tutor1.jpg'
import Tutor2 from './assets/Tutor2.jpg'
import Tutor3 from './assets/Tutor3.jpg'
import * as Icons from 'react-bootstrap-icons'

const Tutor = () => { 
  AOS.init();
  return (
    <div className='bg-orange-500 flex flex-col'  id='tutor'> 
      <div className='flex flex-col m-10 md:px-20 justify-center items-center'>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">Meet The Tutors</h1>
        <p className='italic text-justify text-lg md:p-10 md:text-lg text-black'>
          There is nothing serious about this website. Contact the developer for future collaboration.
          Check the <span><a href='#footer' className='underline font-bold text-green-700'>Contact</a></span> section for more details on how to collaborate with us.
        </p>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between'>
        {/* Teacher 1 */}
        <div data-aos="zoom-in-right" className='flex flex-col bg-gray-200 border-2 hover:border-4 m-5 border-green-700 text-white p-6 rounded-lg shadow-lg w-full md:w-80 transition-transform duration-300 hover:shadow-xl hover:scale-105'>
          <img src={Tutor1} alt="Director 1" className='rounded-full shadow-lg w-full md:w-48 mb-4 border-2 border-orange-500' />
          <div className='flex flex-col text-black'>
            {/* Teacher contact */}
            <div className='flex flex-row'>
              <a href='' className='m-1 border hover:border-orange-500 font-bold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-transparent transition duration-300'>
                <Icons.Whatsapp width={20} height={20} className='text-black hover:text-green-900'/>
              </a>
              <a href='' className='m-1 border hover:border-orange-500 font-bold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-transparent transition duration-300'>
                <Icons.Envelope width={20} height={20} className='text-black hover:text-green-900'/>
              </a>
            </div>
            <h2 className='text-xl font-bold mb-2'>John Doe</h2>
            <p className='text-sm'>Chief Executive Officer</p>
            <p className='text-black'>Worked for the company for 16 years, demonstrating strong leadership, punctuality, and perseverance.</p>
          </div>
        </div>

        {/* Teacher 2 */}
        <div data-aos="zoom-in-left" className='flex flex-col bg-gray-200 border-2 hover:border-4 m-5 border-green-700 text-white p-6 rounded-lg shadow-lg w-full md:w-80 transition-transform duration-300 hover:shadow-xl hover:scale-105'>
          <img src={Tutor2} alt="Director 2" className='rounded-full shadow-lg w-full md:w-48 mb-4 border-2 border-orange-500' />
          <div className='flex flex-col text-black'>
            {/* Teacher contact */}
            <div className='flex flex-row'>
              <a href='' className='m-1 border hover:border-orange-500 font-bold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-transparent transition duration-300'>
                <Icons.Whatsapp width={20} height={20} className='text-black hover:text-green-900'/>
              </a>
              <a href='' className='m-1 border hover:border-orange-500 font-bold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-transparent transition duration-300'>
                <Icons.Envelope width={20} height={20} className='text-black hover:text-green-900'/>
              </a>
            </div>
            <h2 className='text-xl font-bold mb-2'>Jane Doe</h2>
            <p className='text-sm'>Lead Instructor</p>
            <p className='text-black'>Jane has been with us for over a decade, inspiring students and leading innovation in education.</p>
          </div>
        </div>

        {/* Teacher 3 */}
        <div data-aos="zoom-in-right" className='flex flex-col bg-gray-200 border-2 hover:border-4 m-5 border-green-700 text-white p-6 rounded-lg shadow-lg w-full md:w-80 transition-transform duration-300 hover:shadow-xl hover:scale-105'>
          <img src={Tutor3} alt="Director 3" className='rounded-full shadow-lg w-full md:w-48 mb-4 border-2 border-orange-500' />
          <div className='flex flex-col text-black'>
            {/* Teacher contact */}
            <div className='flex flex-row'>
              <a href='' className='m-1 border hover:border-orange-500 font-bold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-transparent transition duration-300'>
                <Icons.Whatsapp width={20} height={20} className='text-black hover:text-green-900'/>
              </a>
              <a href='' className='m-1 border hover:border-orange-500 font-bold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-transparent transition duration-300'>
                <Icons.Envelope width={20} height={20} className='text-black hover:text-green-900'/>
              </a>
            </div>
            <h2 className='text-xl font-bold mb-2'>Sarah Smith</h2>
            <p className='text-sm'>Senior Educator</p>
            <p className='text-black'>Sarah has a passion for education and a dedication to student success.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tutor
