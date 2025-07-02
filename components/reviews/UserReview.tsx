'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { reviews } from '@/lib/frontend/data';
import Link from 'next/link';



export default function UserReview() {
  const [start, setStart] = useState(0);

  const next = () => {
    if (start + 2 < reviews.length) setStart(start + 1);
  };

  const prev = () => {
    if (start > 0) setStart(start - 1);
  };

  return (
    <section className="py-10 px-4 md:px-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">What Our Guests Say</h2>
        <div className="flex gap-2 items-center">
          <button onClick={prev} className={`bg-blue-100  text-blue-400 hover:bg-blue-200 ${start === 0 ? 'cursor-not-allowed' : 'cursor-pointer'} p-2 rounded-full `}>
            <ArrowLeft size={20} />
          </button>
          <button onClick={next} className={`bg-blue-100 text-blue-400 hover:bg-blue-200 ${start + 2 >= reviews.length ? 'cursor-not-allowed' : 'cursor-pointer'} p-2 rounded-full`}>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

     <div className="relative overflow-hidden">
  <div
    className={`flex transition-transform duration-500 ease-in-out`}
    style={{
      transform: `translateX(-${start * 50}%)`,
      width: `${reviews.length * 50}%`,
    }}
  >
    {reviews.map((review, idx) => (
      <div key={idx} className="w-1/2 p-4 flex-shrink-0">
        <div>
              <h3 className="font-semibold text-lg mb-2">“{review.title}”</h3>
              <p className="text-sm text-gray-700 mb-3">“{review.content}”</p>
              <div className="text-yellow-500 mb-4">
                {"★".repeat(review.stars)}
              </div>
            </div>
            <div className="text-sm text-gray-800 font-medium mt-auto flex justify-between items-center">
              <span>— {review.author}</span>
              <span className="text-xs text-gray-500">{review.date}</span>
            </div>
      </div>
    ))}
  </div>
</div>


      <div className="mt-6 text-right">
        <Link href="#" className="text-blue-600 hover:underline inline-flex items-center gap-1">
          See All.. <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
