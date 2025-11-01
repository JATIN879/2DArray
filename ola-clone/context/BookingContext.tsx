'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Booking, Location, RideType } from '@/types';

interface BookingContextType {
  bookings: Booking[];
  currentBooking: Partial<Booking> | null;
  setPickup: (location: Location) => void;
  setDrop: (location: Location) => void;
  setRideType: (rideType: RideType) => void;
  addBooking: (booking: Booking) => void;
  clearCurrentBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentBooking, setCurrentBooking] = useState<Partial<Booking> | null>(null);

  const setPickup = (location: Location) => {
    setCurrentBooking((prev) => ({ ...prev, pickup: location }));
  };

  const setDrop = (location: Location) => {
    setCurrentBooking((prev) => ({ ...prev, drop: location }));
  };

  const setRideType = (rideType: RideType) => {
    setCurrentBooking((prev) => ({ ...prev, rideType }));
  };

  const addBooking = (booking: Booking) => {
    setBookings((prev) => [booking, ...prev]);
  };

  const clearCurrentBooking = () => {
    setCurrentBooking(null);
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        currentBooking,
        setPickup,
        setDrop,
        setRideType,
        addBooking,
        clearCurrentBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
