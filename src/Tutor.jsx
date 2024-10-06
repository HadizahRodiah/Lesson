import React from 'react'
import Tutor1 from './assets/Tutor1.jpg'
import Tutor2 from './assets/Tutor2.jpg'
import Tutor3 from './assets/Tutor3.jpg'
import * as Icons from 'react-bootstrap-icons'

const Tutor = () => { 
  return (
    <div className='bg-orange-500 flex flex-col ' id='tutor'> 
              <div className='flex flex-col m-20 md:px-20 flex justify-center items-center '>
                            <h1 className="text-4xl justify-center font-bold mb-3 text-white">Meet The Tutors</h1>
                             <p className='italic text-justify text-lg  md:p-10 md:text-lg text-black'>
              There is nothing serious about this website.Contact the developer for future Collaboration.
              check the <span><a href='#contact' className='underline font-bold text-green-700'>Contact</a></span> we offer that makes us stands out,we ensure premium--satisfaction</p>
                            </div> 
          <div className='flex flex-col h-full md:flex-row items-center justify-between'>
          {/* teacher  1 */}
          <div className='flex flex-col bg-gray-200 border-2 hover:border-4 m-5 border-green-700 text-white p-6 rounded-lg shadow-lg w-80 transition-transform duration-300 hover:shadow-xl hover:scale-105'>
            <img src={Tutor1} alt="Director 1" className='rounded-full shadow-lg w-full mb-4 border-2 border-orange-500 ' />
            <div className='flex flex-col text-black'>
              {/*teacher contact */}
              <div className='flex flex-row'>
                 <a href='' className='m-1 border hover:border-orange-500 font-bold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-transparent transition duration-300'><Icons.Whatsapp width={20} height={20} className='text-black hover:text-green-900'/></a>
                 <a href='' className=' m-1 border hover:border-orange-500 font-bold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-transparent transition duration-300'><Icons.Envelope width={20} height={20} className='text-black hover:text-green-900'/></a>
              </div>
            <h2 className='text-xl font-bold mb-2'>John Doe</h2>
            <p className='text-sm'>Chief Executive Officer</p>
            <p className='text-black'>Worked for the company for 16 years, demonstrating strong leadership, punctuality, and perseverance.</p>
            </div>
          </div>
          {/* teacher  1 */}
          <div className='flex flex-col bg-gray-200 border-2 hover:border-4 m-5 border-green-700 text-white p-6 rounded-lg shadow-lg w-80 transition-transform duration-300 hover:shadow-xl hover:scale-105'>
            <img src={Tutor2} alt="Director 1" className='rounded-full shadow-lg w-full mb-4 border-2 border-orange-500 ' />
            <div className='flex flex-col text-black'>
              {/*teacher contact */}
              <div className='flex flex-row'>
                 <a href='' className='m-1 border hover:border-orange-500 font-bold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-transparent transition duration-300'><Icons.Whatsapp width={20} height={20} className='text-black hover:text-green-900'/></a>
                 <a href='' className=' m-1 border hover:border-orange-500 font-bold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-transparent transition duration-300'><Icons.Envelope width={20} height={20} className='text-black hover:text-green-900'/></a>
              </div>
            <h2 className='text-xl font-bold mb-2'>John Doe</h2>
            <p className='text-sm'>Chief Executive Officer</p>
            <p className='text-black'>Worked for the company for 16 years, demonstrating strong leadership, punctuality, and perseverance.</p>
            </div>
          </div>

                   {/* teacher  3 */}
                   <div className='flex flex-col bg-gray-200 border-2 hover:border-4 m-5 border-green-700 text-white p-6 rounded-lg shadow-lg w-80 transition-transform duration-300 hover:shadow-xl hover:scale-105'>
            <img src={Tutor3} alt="Director 1" className='rounded-full shadow-lg w-full mb-4 border-2 border-orange-500 ' />
            <div className='flex flex-col text-black'>
              {/*teacher contact */}
              <div className='flex flex-row'>
                 <a href='' className='m-1 border hover:border-orange-500 font-bold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-transparent transition duration-300'><Icons.Whatsapp width={20} height={20} className='text-black hover:text-green-900'/></a>
                 <a href='' className=' m-1 border hover:border-orange-500 font-bold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-transparent transition duration-300'><Icons.Envelope width={20} height={20} className='text-black hover:text-green-900'/></a>
              </div>
            <h2 className='text-xl font-bold mb-2'>John Doe</h2>
            <p className='text-sm'>Chief Executive Officer</p>
            <p className='text-black'>Worked for the company for 16 years, demonstrating strong leadership, punctuality, and perseverance.</p>
            </div>
          </div>
          </div>
        </div>
  )
}

export default Tutor