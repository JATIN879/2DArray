'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Location, RideType } from '@/types';
import { calculateFare, RIDE_OPTIONS } from '@/utils/fareCalculator';
import RideSelector from '@/components/RideSelector';
import { useBooking } from '@/context/BookingContext';

const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

// Predefined locations for demo
const DEMO_LOCATIONS = [
  { lat: 12.9716, lng: 77.5946, address: 'MG Road, Bangalore' },
  { lat: 12.9352, lng: 77.6245, address: 'Koramangala, Bangalore' },
  { lat: 13.0358, lng: 77.5970, address: 'Indiranagar, Bangalore' },
  { lat: 12.9698, lng: 77.7500, address: 'Whitefield, Bangalore' },
  { lat: 12.9279, lng: 77.6271, address: 'HSR Layout, Bangalore' },
  { lat: 13.0097, lng: 77.5505, address: 'Malleshwaram, Bangalore' },
];

export default function BookPage() {
  const router = useRouter();
  const { addBooking } = useBooking();
  const [pickup, setPickup] = useState<Location | null>(null);
  const [drop, setDrop] = useState<Location | null>(null);
  const [selectedRide, setSelectedRide] = useState<RideType | null>(null);
  const [fareEstimates, setFareEstimates] = useState<Record<RideType, number> | null>(null);
  const [isBooking, setIsBooking] = useState(false);

  useEffect(() => {
    if (pickup && drop) {
      const estimates: Record<RideType, number> = {} as Record<RideType, number>;
      RIDE_OPTIONS.forEach((ride) => {
        const fare = calculateFare(pickup, drop, ride.id);
        estimates[ride.id] = fare.totalFare;
      });
      setFareEstimates(estimates);
    } else {
      setFareEstimates(null);
    }
  }, [pickup, drop]);

  const handleBooking = async () => {
    if (!pickup || !drop || !selectedRide) return;

    setIsBooking(true);

    try {
      const fare = calculateFare(pickup, drop, selectedRide);

      const bookingData = {
        pickup,
        drop,
        rideType: selectedRide,
        fare: fare.totalFare,
        distance: fare.distance,
      };

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const booking = await response.json();
        addBooking(booking);
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Failed to book ride. Please try again.');
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Book Your Ride</h1>
          <p className="text-gray-600">Enter your pickup and drop locations to get started</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-6">
            {/* Location Selection */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Trip Details</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Location
                  </label>
                  <select
                    value={pickup ? DEMO_LOCATIONS.findIndex(loc => loc.address === pickup.address) : ''}
                    onChange={(e) => setPickup(DEMO_LOCATIONS[parseInt(e.target.value)])}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select pickup location</option>
                    {DEMO_LOCATIONS.map((loc, idx) => (
                      <option key={idx} value={idx}>
                        {loc.address}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Drop Location
                  </label>
                  <select
                    value={drop ? DEMO_LOCATIONS.findIndex(loc => loc.address === drop.address) : ''}
                    onChange={(e) => setDrop(DEMO_LOCATIONS[parseInt(e.target.value)])}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select drop location</option>
                    {DEMO_LOCATIONS.map((loc, idx) => (
                      <option key={idx} value={idx}>
                        {loc.address}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Ride Selection */}
            {pickup && drop && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <RideSelector
                  selectedRide={selectedRide}
                  onSelectRide={setSelectedRide}
                  fareEstimates={fareEstimates || undefined}
                />
              </div>
            )}

            {/* Booking Summary */}
            {pickup && drop && selectedRide && fareEstimates && (
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Distance</span>
                    <span className="font-semibold text-gray-900">
                      {calculateFare(pickup, drop, selectedRide).distance} km
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Estimated Time</span>
                    <span className="font-semibold text-gray-900">
                      {calculateFare(pickup, drop, selectedRide).duration} min
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-yellow-200">
                    <span className="text-lg font-bold text-gray-900">Total Fare</span>
                    <span className="text-2xl font-bold text-yellow-600">
                      ₹{fareEstimates[selectedRide]}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  disabled={isBooking}
                  className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-4 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isBooking ? 'Booking...' : 'Confirm Booking'}
                </button>
              </div>
            )}
          </div>

          {/* Right Column - Map */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-xl shadow-md p-4">
              <MapComponent pickup={pickup || undefined} drop={drop || undefined} height="600px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
