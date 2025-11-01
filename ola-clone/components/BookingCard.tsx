'use client';

import { Booking } from '@/types';

interface BookingCardProps {
  booking: Booking;
}

export default function BookingCard({ booking }: BookingCardProps) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  const rideIcons: Record<string, string> = {
    mini: '🚗',
    sedan: '🚙',
    suv: '🚐',
    auto: '🛺',
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{rideIcons[booking.rideType]}</div>
          <div>
            <h3 className="font-bold text-gray-900 capitalize">{booking.rideType}</h3>
            <p className="text-sm text-gray-500">Booking ID: {booking.id}</p>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            statusColors[booking.status]
          }`}
        >
          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
        </span>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-start space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5"></div>
          <div className="flex-1">
            <p className="text-xs text-gray-500">Pickup</p>
            <p className="text-sm font-medium text-gray-900">{booking.pickup.address}</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
          <div className="flex-1">
            <p className="text-xs text-gray-500">Drop</p>
            <p className="text-sm font-medium text-gray-900">{booking.drop.address}</p>
          </div>
        </div>
      </div>

      {booking.driverName && booking.vehicleNumber && (
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-500 mb-1">Driver Details</p>
          <p className="text-sm font-medium text-gray-900">{booking.driverName}</p>
          <p className="text-sm text-gray-600">{booking.vehicleNumber}</p>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-500">Distance</p>
          <p className="text-sm font-semibold text-gray-900">{booking.distance} km</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Fare</p>
          <p className="text-lg font-bold text-yellow-600">₹{booking.fare}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Date</p>
          <p className="text-sm font-semibold text-gray-900">
            {new Date(booking.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
