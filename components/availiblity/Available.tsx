// components/RoomSelectionTable.js
import React from 'react';
import { UserIcon,  ArrowsRightLeftIcon, TvIcon, WifiIcon, SwatchIcon } from '@heroicons/react/24/outline'; // প্রয়োজনীয় আইকন
import { Bath, BedDouble } from 'lucide-react';

const roomTypes = [
  {
    id: 1,
    name: "Twin Room",
    beds: "2 single beds",
    icons: [
      { icon: BedDouble , label: "Room", size: "1200 sq ft" },
      { icon: SwatchIcon, label: "Air condition" },
      { icon: Bath, label: "Bathroom" },
      { icon: TvIcon, label: "TV" },
      { icon: WifiIcon, label: "WIFI" },
    ],
    guests: 2,
    price: 282,
    choices: "Brekfast included",
    roomsLeft: 4,
  },
  {
    id: 2,
    name: "Deluxe Double Room",
    beds: "2 single beds",
    icons: [
      { icon: BedDouble, label: "Room", size: "1200 sq ft" },
      { icon: SwatchIcon, label: "Air condition" },
      { icon: Bath, label: "Bathroom" },
      { icon: TvIcon, label: "TV" },
      { icon: WifiIcon, label: "WIFI" },
    ],
    guests: 2,
    price: 282,
    choices: "Brekfast included",
    roomsLeft: 4,
  },
  {
    id: 3,
    name: "Deluxe Double Room",
    beds: "2 single beds",
    icons: [
      { icon: BedDouble, label: "Room", size: "1200 sq ft" },
      { icon: SwatchIcon, label: "Air condition" },
      { icon: Bath, label: "Bathroom" },
      { icon: TvIcon, label: "TV" },
      { icon: WifiIcon, label: "WIFI" },
    ],
    guests: 2,
    price: 282,
    choices: "Brekfast included",
    roomsLeft: 4,
  },
];

const RoomSelectionTable = () => {
  return (
    <div className="bg-white p-4 md:p-6  mt-6">
      {/* Table Header */}
      <div className="hidden md:grid grid-cols-7 gap-4 pb-3 border-b border-gray-200 font-semibold text-gray-700 text-sm md:text-base">
        <div className="col-span-2">Room type</div>
        <div>Number of guests</div>
        <div>Price for 1 week</div>
        <div>Your choices</div>
        <div>Select rooms</div>
        <div>Your choices</div>
      </div>

      {roomTypes.map((room) => (
        <div key={room.id} className="grid grid-cols-1 md:grid-cols-7 gap-4 py-4 border-b border-gray-100 last:border-b-0">
          <div className="col-span-2 flex flex-col">
            <h4 className="font-medium text-lg text-gray-800 mb-1">{room.name}</h4>
            <p className="text-sm text-gray-600 mb-2">{room.beds}</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600">
              {room.icons.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <item.icon className="h-4 w-4 mr-1 text-gray-500" />
                  {item.label} {item.size && <span className="ml-0.5">{item.size}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Number of guests */}
          <div className="flex items-center md:justify-center">
            <UserIcon className="h-5 w-5 text-gray-600 mr-1" />
            <UserIcon className="h-5 w-5 text-gray-600" />
            {room.guests > 2 && <span className="ml-1 text-gray-600">+{room.guests - 2}</span>}
          </div>

          {/* Price for 1 week */}
          <div className="flex items-center font-bold text-gray-800 text-lg md:justify-center">
            ${room.price}
          </div>

          {/* Your choices */}
          <div className="flex flex-col items-start md:justify-center">
            <p className="text-sm text-gray-700">{room.choices}</p>
            {room.roomsLeft && (
              <p className="text-xs text-red-500 font-semibold">Only {room.roomsLeft} rooms left</p>
            )}
          </div>

          {/* Select rooms (Dropdown) */}
          <div className="flex items-center md:justify-center">
            <select className="border border-gray-300 rounded-lg px-3 py-1 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          {/* Your choices (Reserve Button) */}
          <div className="flex items-center md:justify-center">
            <button className="w-full px-4 py-2 bg-[#007DD0] text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm">
              Reserve
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomSelectionTable;