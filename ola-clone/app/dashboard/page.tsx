'use client';

import { useEffect, useState } from 'react';
import { Booking } from '@/types';
import BookingCard from '@/components/BookingCard';
import Link from 'next/link';

export default function DashboardPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/bookings');
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      }
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const activeBookings = bookings.filter(
    (b) => b.status === 'confirmed' || b.status === 'pending'
  );
  const pastBookings = bookings.filter(
    (b) => b.status === 'completed' || b.status === 'cancelled'
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Rides</h1>
          <p className="text-gray-600">View and manage your bookings</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
          </div>
        ) : bookings.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <div className="text-6xl mb-4">🚗</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No rides yet</h2>
            <p className="text-gray-600 mb-6">
              Book your first ride and start your journey with Ola
            </p>
            <Link
              href="/book"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-md hover:shadow-lg"
            >
              Book a Ride
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Active Bookings */}
            {activeBookings.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Active Rides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeBookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                  ))}
                </div>
              </div>
            )}

            {/* Past Bookings */}
            {pastBookings.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Past Rides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pastBookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                  ))}
                </div>
              </div>
            )}

            {/* All Bookings if no categorization */}
            {activeBookings.length === 0 && pastBookings.length === 0 && bookings.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">All Rides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {bookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Stats Section */}
        {bookings.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Total Rides</h3>
              <p className="text-3xl font-bold text-yellow-600">{bookings.length}</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Total Spent</h3>
              <p className="text-3xl font-bold text-yellow-600">
                ₹{bookings.reduce((sum, b) => sum + b.fare, 0)}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-3xl mb-2">🛣️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Total Distance</h3>
              <p className="text-3xl font-bold text-yellow-600">
                {bookings.reduce((sum, b) => sum + b.distance, 0).toFixed(1)} km
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
