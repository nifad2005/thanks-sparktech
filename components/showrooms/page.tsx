import { showRoomsData } from '@/lib/frontend/data';
import Image from 'next/image';

const ShowRooms = () => {
  

  return (
    <section className=" py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">You may also like</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 2xl:grid-cols-3  gap-6">
          {showRoomsData.slice(0, 5).map((card, index) => (
            <div key={index} className="bg-white xl:w-[400px] w-[300px]  transition-all duration-300  rounded-lg shadow-md overflow-hidden hover:shadow-lg">
              <Image src={card.image} alt={card.title} width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 mr-1">&#9733;</span>
                  <span className="text-gray-700">{card.rating}</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {card.description}
                </p>
                <div className="flex items-baseline mb-4">
                  <span className="text-xl font-bold text-gray-800">{card.price}</span>
                  <span className="text-gray-600 ml-1">Per Night</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2 2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                  <span>{card.bedrooms} Bedroom</span>
                  <svg className="w-4 h-4 ml-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  <span>{card.bathrooms} Bathroom</span>
                  <svg className="w-4 h-4 ml-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  <span>{card.sqft} sqft</span>
                </div>
                <div className="flex justify-between items-center">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">Book Now</button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowRooms;