
import React from 'react';
import { CalendarDaysIcon, UserGroupIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchAvail = () => {
  return (
    <div className="bg-white p-4 md:p-6 ">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-3">
        <div className="flex-1 w-full md:w-auto">
          <label htmlFor="check-in" className="block text-gray-700 text-sm font-medium mb-1">Check-In</label>
          <div className="relative">
            <input
              type="text"
              id="check-in"
              readOnly 
              value="Tue,23 June 2024"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer text-sm md:text-base"
            />
            <CalendarDaysIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
          </div>
        </div>

        {/* Check-Out */}
        <div className="flex-1 w-full md:w-auto">
          <label htmlFor="check-out" className="block text-gray-700 text-sm font-medium mb-1">Check-Out</label>
          <div className="relative">
            <input
              type="text"
              id="check-out"
              readOnly 
              value="Sat,29 June 2024"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer text-sm md:text-base"
            />
            <CalendarDaysIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
          </div>
        </div>

        {/* Room & Guest */}
        <div className="flex-1 w-full md:w-auto">
          <label htmlFor="room-guest" className="block text-gray-700 text-sm font-medium mb-1">Room & Guest</label>
          <div className="relative">
            <input
              type="text"
              id="room-guest"
              readOnly 
              value="2 Adults - 0 Children - 1 Room"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer text-sm md:text-base"
            />
            <UserGroupIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
          </div>
        </div>

        <div className="w-full md:w-auto mt-6 md:mt-auto self-end"> 
          <button className="w-full px-6 py-2 md:py-3 bg-[#007DD0] text-white rounded-lg hover:bg-[#007DD2] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center">
            <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchAvail;