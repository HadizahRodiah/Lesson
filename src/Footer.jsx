import React from 'react';
import * as Icons from 'react-bootstrap-icons';

const Footer = () => {
  AOS.init();
  return (
    <footer className='bg-green-700 text-white py-10 px-8 md:px-18 lg:px-24 w-full' data-aos="fade-up" id='footer'>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Logo and Site Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
        <div className="text-2xl font-bold flex items-center">
                  <span className='text-orange-400 text-4xl font-serif'>ALmas</span>
                  <span className='text-black text-2xl font-bold'>chemy</span>
                
                </div>
                
          <p>Your gateway to a brighter future. Enhancing education, one step at a time.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4 md:space-y-2">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="space-y-2">
            <li className='flex items-center'>
              <Icons.House width={20} height={20} className='mr-2' />
              <a href='#home' className='hover:underline hover:text-orange-600'>Home</a>
            </li>
            <li className='flex items-center'>
              <Icons.Book width={20} height={20} className='mr-2' />
              <a href='#class' className='hover:underline hover:text-orange-600'>Courses</a>
            </li>
            <li className='flex items-center'>
              <Icons.People width={20} height={20} className='mr-2' />
              <a href='#tutor' className='hover:underline hover:text-orange-600'>Our Team</a>
            </li>
            <li className='flex items-center'>
              <Icons.Tools width={20} height={20} className='mr-2' />
              <a href='#about' className='hover:underline hover:text-orange-600'>Service</a>
            </li>
            <li className='flex items-center'>
              <Icons.ChatLeftDots width={20} height={20} className='mr-2' />
              <a href='#reviews' className='hover:underline hover:text-orange-600'>Review</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col  space-y-4">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <ul className="space-y-2">
            <li className='flex items-center'>
              <Icons.Envelope width={20} height={20} className='mr-2' />
              <a href='mailto:hadizahrodiah@gmail.com' className='hover:underline hover:text-orange-600'>Almaschemy@gmail.com</a>
            </li>
            <li className='flex items-center'>
              <Icons.Phone width={20} height={20} className='mr-2' />
              <a href='tel:+2349155140115' className='hover:underline hover:text-orange-600'>+234 915 551 40115</a>
            </li>
            <li className='flex items-center'>
              <Icons.Whatsapp width={20} height={20} className='mr-2' />
              <a href='https://wa.me/+2349155140115' className='hover:underline hover:text-orange-600'>WhatsApp</a>
            </li>
            <li className='flex items-center'>
              <Icons.Linkedin width={20} height={20} className='mr-2' />
              <a href='https://bit.ly/4dbrkDV' className='hover:underline hover:text-orange-600'>LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-orange-600 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} AlmasChemy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
