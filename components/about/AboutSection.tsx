// components/HotelAboutAndArea.js
import React from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';


import { BusFront, CookingPot, Umbrella } from 'lucide-react';

const nearbyPlaces = [
  {
    title: "Restaurants & cafes",
    icon: CookingPot ,
    items: [
      { name: "Blue Cafe", distance: "1.4 km" },
      { name: "Blue Cafe", distance: "1.4 km" },
      { name: "Blue Cafe", distance: "1.4 km" },
    ],
  },
  {
    title: "Shops & Markets",
    icon: CookingPot,
    items: [
      { name: "Blue Cafe", distance: "1.4 km" },
      { name: "Blue Cafe", distance: "1.4 km" },
      { name: "Blue Cafe", distance: "1.4 km" },
    ],
  },
  {
    title: "Shops & Markets",
    icon: ShoppingBagIcon,
    items: [
      { name: "Central Mall", distance: "1.4 km" },
      { name: "Central Mall", distance: "1.4 km" },
      { name: "Central Mall", distance: "1.4 km" },
    ],
  },
  {
    title: "Beaches",
    icon: Umbrella ,
    items: [
      { name: "Les Dunes Beach", distance: "1.4 km" },
      { name: "Les Dunes Beach", distance: "1.4 km" },
      { name: "Les Dunes Beach", distance: "1.4 km" },
    ],
  },
  {
    title: "Public transport",
    icon: BusFront ,
    items: [
      { name: "Train - Riverdale Central Station", distance: "1.4 km" },
      { name: "Metro - Citylime Metro Hub", distance: "1.4 km" },
      { name: "Metro - Citylime Metro Hub", distance: "1.4 km" },
    ],
  },
];

const AboutSection = () => {
  return (
    <div className="bg-white p-4 md:p-6  mt-6">
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">About this property</h2>
        <p className="text-gray-700 text-sm md:text-base">
          The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience tailored for both business and leisure travelers. With its modern design and panoramic views of the Mediterranean Sea, the suite combines comfort, elegance, and functionality.
        </p>
      </div>

      <div className='md:flex-row flex flex-col gap-4'>
        <div>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Explore the Area</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {nearbyPlaces.map((place, index) => (
              <div key={index}>
              <div className="flex items-center text-gray-700 font-semibold mb-1">
                <place.icon className="h-5 w-5 mr-2 text-blue-500" />
                {place.title}
              </div>
              <ul className="text-gray-600 text-sm">
                {place.items.map((item, i) => (
                    <li key={i} className="flex justify-between py-0.5">
                    <span>{item.name}</span>
                    <span>{item.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
          </div>

        <div className="relative  overflow-hidden rounded-lg border border-gray-200">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7012.2983497902005!2d88.64666412408282!3d25.618683607093136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb52900b97ebe7%3A0x86764640506ce5fb!2z4Kar4KeB4Kay4Kas4Ka-4Kah4Ka84KeAIOCmrOCmvuCmuCDgprjgp43gpp_gp43gpq_gpr7gpqjgp43gpqEg4Kas4Ka-4Kac4Ka-4KawLCDgpqbgpr_gpqjgpr7gppzgpqrgp4HgprAg4Ka44Kam4Kaw!5e1!3m2!1sen!2sbd!4v1751436373218!5m2!1sen!2sbd" width="450" height="250" loading="lazy"></iframe>
          <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md text-blue-600 text-sm font-medium cursor-pointer hover:bg-gray-50 transition-colors">
            Explore the Area
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;