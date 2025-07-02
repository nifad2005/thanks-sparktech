

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white">
      <h1 className="text-7xl font-bold text-[#007DD0] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        This page didn't requeted by Spark Tech.😝
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#007DD0] text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        <ArrowLeft size={18} />
        Go back Home
      </Link>
    </div>
  );
}
