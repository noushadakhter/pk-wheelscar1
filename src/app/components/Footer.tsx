import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-gray-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="text-gray-400">
            At PakWheels, we provide a platform to buy and sell cars, bringing together car enthusiasts and providing reliable resources.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-2xl font-bold">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Used Cars</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">New Cars</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-2xl font-bold">Follow Us</h2>
          <div>

         <b><FaFacebook /> Facebook:</b> <a href="https://www.facebook.com/noushad.akhter.73" target="_blank">www.Facebook.com</a>
           

          
          </div>
          <div>
          <b><AiOutlineMail />
          Email:</b> <a href="mailto:noushadakhter20@gmail.com">noushadakhter20@gmail.com</a>
          </div>

          <div>
          <b><FaLinkedin />
          LinkedIn:</b> <a href="https://www.linkedin.com/in/noushad-akhter-a13171300" target="_blank">www.LinkedIn.com</a>
          </div>


        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-gray-400">
        <p>Copyright &copy; {new Date().getFullYear()} Made by Noushad Akhter (pvt). All Rights Reserved. <br />
          Terms of Service | Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;