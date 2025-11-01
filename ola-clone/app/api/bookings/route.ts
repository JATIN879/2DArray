import { NextRequest, NextResponse } from 'next/server';
import { Booking, Location, RideType } from '@/types';
import { generateBookingId, assignDriver } from '@/utils/fareCalculator';

// In-memory storage (in production, use a database)
const bookings: Booking[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pickup, drop, rideType, fare, distance } = body;

    if (!pickup || !drop || !rideType || !fare || !distance) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const driver = assignDriver();

    const booking: Booking = {
      id: generateBookingId(),
      pickup: pickup as Location,
      drop: drop as Location,
      rideType: rideType as RideType,
      fare,
      distance,
      status: 'confirmed',
      driverName: driver.name,
      vehicleNumber: driver.vehicle,
      createdAt: new Date().toISOString(),
    };

    bookings.unshift(booking);

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
