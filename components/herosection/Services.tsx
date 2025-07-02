"use client"
import React, { useState } from 'react';
import { MapPinIcon, WifiIcon, XMarkIcon, SwatchIcon, SunIcon, HomeModernIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'; // নতুন আইকন: XMarkIcon, AirModernIcon, DumbbellIcon, ChatBubbleLeftRightIcon
import { AirVent, Dumbbell } from 'lucide-react';

const Services = () => {

  return (
    <div className="bg-white p-1 md:p-6 w-full ">
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 text-sm md:text-base font-medium border-b-2 border-blue-600`}
        >
          Over View
        </button>
        <button
          disabled
          className={`ml-4 py-2 px-4 text-sm md:text-base font-medium text-gray-400 cursor-not-allowed`}
          
        >
          Features
        </button>
        <button
          className={`ml-4 py-2 px-4 text-sm md:text-base font-medium text-gray-400 cursor-not-allowed`}
        >
          Reviews
        </button>
        <button className=" flex items-center px-4 py-2 bg-[#007DD0] text-white rounded-lg text-sm md:text-base hover:bg-[#007DD2] transition-colors duration-200">
            <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2" />
            Message
        </button>
      </div>
   
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Property Type</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
              <MapPinIcon className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700">Resorts</span>
            </div>
            <div className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
              <HomeModernIcon className="h-5 w-5 text-gray-500 mr-2" /> 
              <span className="text-gray-700">12000 sqft</span>
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm">
              <WifiIcon className="h-4 w-4 mr-2 text-blue-500" /> Wifi
            </div>
            <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm">
              <XMarkIcon className="h-4 w-4 mr-2 text-red-500" /> Dining {/* ছবিতে 'X' ছিল */}
            </div>
            <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm">
              <SunIcon className="h-4 w-4 mr-2 text-blue-500" /> Swimming Pool
            </div>
            <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm">
              <AirVent  className="h-4 w-4 mr-2 text-blue-500" /> Air Conditioning
            </div>
            <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm">
              <Dumbbell  className="h-4 w-4 mr-2 text-blue-500" /> Gym
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-4">Availability</h3>

        </div>
    </div>
  );
};

export default Services;