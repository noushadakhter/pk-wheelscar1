import React from 'react';

const Hero = () => {
  return (
    <div className="flex justify-center px-4 py-10">
      <section className="text-center max-w-5xl">
        <h2 className="text-4xl md:text-4xl text-gray-800 font-semibold mb-6">
          Sell Your Car on PakWheels and Get the Best Price
        </h2>

        {/* Parent div for the hero section */}
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mt-8">
          {/* Left section */}
          <div className="leading-relaxed text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl text-blue-900 font-semibold mb-4">Post Your Ad on PakWheels</h2>
            <p>Post your Ad for Free in 3 Easy Steps</p>
            <p>Get Genuine offers from Verified Buyers</p>
            <p>Sell your car Fast at the Best Price</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md px-6 py-2 mt-4 shadow-md transition">
              Post Your Ad
            </button>
          </div>

          {/* Center divider */}
          <div className="hidden md:block">
            <h3 className="text-gray-600 font-bold text-2xl">OR</h3>
          </div>

          {/* Right section */}
          <div className="leading-relaxed text-center md:text-left">
            <h2 className="text-2xl text-blue-900 font-semibold mb-4">Try PakWheels Sell It For Me</h2>
            <p>Dedicated Sales Expert to Sell Your Car</p>
            <p>We Bargain for you and share the Best Offer</p>
            <p>We Ensure Safe and Secure Transactions</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-6 py-2 mt-4 shadow-md transition">
              Register Your Car
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;