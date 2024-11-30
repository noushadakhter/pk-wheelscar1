import React from 'react';

const Thankyou = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 flex justify-center items-center opacity-30">
        <div className="w-72 h-72 rounded-full bg-purple-300 blur-3xl animate-pulse"></div>
        <div className="w-72 h-72 rounded-full bg-blue-300 blur-3xl animate-ping absolute right-20"></div>
        <div className="w-96 h-96 rounded-full bg-yellow-300 blur-3xl animate-bounce absolute bottom-16 left-32"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-7xl md:text-8xl font-bold italic text-white drop-shadow-lg animate-bounce-slow">
          Thank You for Shopping!!
        </h1>
        <p className="text-white text-lg md:text-2xl mt-4 animate-fade-in">
          Your order will be delivered in 3 working days!
        </p>
      </div>
    </div>
  );
};

export default Thankyou;