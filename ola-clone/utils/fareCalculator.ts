import { RideType, FareEstimate, Location } from '@/types';

export const RIDE_OPTIONS = [
  {
    id: 'mini' as RideType,
    name: 'Mini',
    description: 'Affordable, compact rides',
    capacity: '4 seats',
    pricePerKm: 10,
    basePrice: 30,
    eta: '2 min',
  },
  {
    id: 'sedan' as RideType,
    name: 'Sedan',
    description: 'Comfortable sedans',
    capacity: '4 seats',
    pricePerKm: 15,
    basePrice: 50,
    eta: '3 min',
  },
  {
    id: 'suv' as RideType,
    name: 'SUV',
    description: 'Spacious SUVs',
    capacity: '6 seats',
    pricePerKm: 20,
    basePrice: 80,
    eta: '5 min',
  },
  {
    id: 'auto' as RideType,
    name: 'Auto',
    description: 'Quick auto rides',
    capacity: '3 seats',
    pricePerKm: 8,
    basePrice: 20,
    eta: '1 min',
  },
];

export function calculateDistance(pickup: Location, drop: Location): number {
  // Haversine formula for calculating distance between two coordinates
  const R = 6371; // Earth's radius in km
  const dLat = toRad(drop.lat - pickup.lat);
  const dLon = toRad(drop.lng - pickup.lng);
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(pickup.lat)) *
      Math.cos(toRad(drop.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return Math.round(distance * 10) / 10; // Round to 1 decimal place
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function calculateFare(
  pickup: Location,
  drop: Location,
  rideType: RideType
): FareEstimate {
  const distance = calculateDistance(pickup, drop);
  const rideOption = RIDE_OPTIONS.find((option) => option.id === rideType);
  
  if (!rideOption) {
    throw new Error('Invalid ride type');
  }
  
  const baseFare = rideOption.basePrice;
  const distanceFare = distance * rideOption.pricePerKm;
  const totalFare = Math.round(baseFare + distanceFare);
  
  // Estimate duration (assuming average speed of 30 km/h)
  const duration = Math.round((distance / 30) * 60); // in minutes
  
  return {
    distance,
    duration,
    baseFare,
    distanceFare: Math.round(distanceFare),
    totalFare,
    rideType,
  };
}

export function generateBookingId(): string {
  return `OLA${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}

export const MOCK_DRIVERS = [
  { name: 'Rajesh Kumar', vehicle: 'KA-01-AB-1234' },
  { name: 'Amit Singh', vehicle: 'KA-02-CD-5678' },
  { name: 'Priya Sharma', vehicle: 'KA-03-EF-9012' },
  { name: 'Vikram Patel', vehicle: 'KA-04-GH-3456' },
  { name: 'Sunita Reddy', vehicle: 'KA-05-IJ-7890' },
];

export function assignDriver() {
  return MOCK_DRIVERS[Math.floor(Math.random() * MOCK_DRIVERS.length)];
}
