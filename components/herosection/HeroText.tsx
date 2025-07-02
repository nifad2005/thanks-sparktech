import React from 'react';
import { BookmarkIcon, ShareIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const HotelCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4   w-full  mx-auto my-4">

      <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">El Aurassi Hotel</h2>
        <p className="text-sm md:text-base text-gray-600">Spacious, modern rooms with panoramic views of the Mediterranean Sea.</p>
      </div>


      <div className="flex items-center space-x-3 md:space-x-4">

        <button className="p-2 md:p-3 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          <BookmarkIcon className="h-5 w-5 md:h-6 md:w-6 text-[#007DD0]" />
        </button>

        <button className="p-2 md:p-3 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          <ShareIcon className="h-5 w-5 md:h-6 md:w-6 text-[#007DD0]" />
        </button>

        <button className="flex items-center px-4 py-2 md:px-6 md:py-3 bg-[#007DD0] text-white font-medium rounded-lg hover:bg-[#007DD2] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Reserve
          <ArrowRightIcon className="ml-2 h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>
    </div>
  );
};

export default HotelCard;