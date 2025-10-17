import React from 'react';

const HeroSection = () => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center text-white p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden"
      style={{ 
        backgroundImage: 'url("/pending.jpeg")', // Modern Pharmacy Laboratory image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 animate-fade-in-down">
          Driving Pharmaceutical Innovation Through Superior Sourcing
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 opacity-90 animate-fade-in-up">
          Delivering quality APIs with precision and reliability to power your pharmaceutical innovations.
        </p>
        <button className="bg-white text-blue-600 font-bold px-8 py-3 md:px-10 md:py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 animate-bounce-in">
          Discover Our Breakthroughs
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
