'use client';

import { RideType } from '@/types';
import { RIDE_OPTIONS } from '@/utils/fareCalculator';

interface RideSelectorProps {
  selectedRide: RideType | null;
  onSelectRide: (rideType: RideType) => void;
  fareEstimates?: Record<RideType, number>;
}

export default function RideSelector({
  selectedRide,
  onSelectRide,
  fareEstimates,
}: RideSelectorProps) {
  const rideIcons: Record<RideType, string> = {
    mini: '🚗',
    sedan: '🚙',
    suv: '🚐',
    auto: '🛺',
  };

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Ride</h3>
      {RIDE_OPTIONS.map((ride) => (
        <button
          key={ride.id}
          onClick={() => onSelectRide(ride.id)}
          className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
            selectedRide === ride.id
              ? 'border-yellow-500 bg-yellow-50 shadow-md'
              : 'border-gray-200 bg-white hover:border-yellow-300 hover:shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{rideIcons[ride.id]}</div>
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-bold text-gray-900">{ride.name}</h4>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                    {ride.eta}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{ride.description}</p>
                <p className="text-xs text-gray-500 mt-1">{ride.capacity}</p>
              </div>
            </div>
            <div className="text-right">
              {fareEstimates && fareEstimates[ride.id] ? (
                <div className="text-2xl font-bold text-gray-900">
                  ₹{fareEstimates[ride.id]}
                </div>
              ) : (
                <div className="text-sm text-gray-600">
                  ₹{ride.pricePerKm}/km
                </div>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
