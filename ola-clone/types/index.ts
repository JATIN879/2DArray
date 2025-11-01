export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export type RideType = 'mini' | 'sedan' | 'suv' | 'auto';

export interface RideOption {
  id: RideType;
  name: string;
  description: string;
  capacity: string;
  pricePerKm: number;
  basePrice: number;
  eta: string;
}

export interface Booking {
  id: string;
  pickup: Location;
  drop: Location;
  rideType: RideType;
  fare: number;
  distance: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  driverName?: string;
  vehicleNumber?: string;
  createdAt: string;
}

export interface FareEstimate {
  distance: number;
  duration: number;
  baseFare: number;
  distanceFare: number;
  totalFare: number;
  rideType: RideType;
}
