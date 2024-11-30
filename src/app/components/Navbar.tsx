import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-blue-800 text-white">
      <nav className="w-full max-w-screen-xl mx-auto p-2">
        {/* Top Section */}
        <div className="flex justify-between items-center px-4 md:px-8">
          <p>Download app via sms</p>
          <ul className="flex space-x-4">
            <li>
              <span className="text-red-700">اردو</span> <span className="text-gray-400">|</span>
            </li>
            <li>
              Sign In <span className="text-gray-400">|</span>
            </li>
            <li>Sign Up</li>
          </ul>
        </div>

        <hr className="border-t border-gray-700 mx-4 md:mx-8 my-2" />

        {/* Main Navbar Section */}
        <div className="flex justify-between items-center px-4 md:px-8 py-4">
          <h3 className="font-semibold text-3xl">
            PAKWHEELSC<span className="text-red-700">O</span>M
          </h3>
          <ul className="hidden md:flex space-x-6 lg:space-x-10">
            <li>Used Cars</li>
            <li>New Cars</li>
            <li>Bikes</li>
            <li>Auto Store</li>
            <li>Videos</li>
            <li>Forums</li>
            <li>Blogs</li>
            <li>More</li>
          </ul>
          <button className="bg-red-600 p-2 font-semibold rounded-md px-4 hover:bg-red-700 transition">
            Post an Ad
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;