'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">O</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Ola</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === '/'
                  ? 'text-yellow-600'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Home
            </Link>
            <Link
              href="/book"
              className={`text-sm font-medium transition-colors ${
                pathname === '/book'
                  ? 'text-yellow-600'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Book Ride
            </Link>
            <Link
              href="/dashboard"
              className={`text-sm font-medium transition-colors ${
                pathname === '/dashboard'
                  ? 'text-yellow-600'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              My Rides
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/book"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
