# Ola Clone - Ride Hailing Platform

A fully functional ride-hailing web application built with Next.js 14, TypeScript, and Tailwind CSS. This project replicates the core features of Ola, including ride booking, fare calculation, interactive maps, and booking management.

## 🚀 Features

### Core Functionality
- **Landing Page**: Beautiful hero section with features, ride types, and how-it-works sections
- **Ride Booking**: Interactive booking interface with location selection
- **Multiple Ride Types**: Choose from Mini, Sedan, SUV, or Auto
- **Dynamic Fare Calculator**: Real-time fare estimation based on distance and ride type
- **Interactive Maps**: Leaflet.js integration with pickup/drop markers and route visualization
- **Booking Management**: View active and past rides with detailed information
- **Driver Assignment**: Automatic driver assignment with vehicle details
- **Responsive Design**: Mobile-first design that works on all devices

### Ride Options
1. **Mini** - ₹10/km (Base: ₹30) - Affordable, compact rides
2. **Sedan** - ₹15/km (Base: ₹50) - Comfortable sedans
3. **SUV** - ₹20/km (Base: ₹80) - Spacious SUVs
4. **Auto** - ₹8/km (Base: ₹20) - Quick auto rides

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Maps**: Leaflet.js + React Leaflet
- **State Management**: React Context API
- **API**: Next.js API Routes
- **Data Storage**: In-memory storage (can be upgraded to database)

## 📁 Project Structure

```
ola-clone/
├── app/
│   ├── api/
│   │   └── bookings/
│   │       └── route.ts          # Booking API endpoints
│   ├── book/
│   │   └── page.tsx              # Ride booking page
│   ├── dashboard/
│   │   └── page.tsx              # User dashboard
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles
├── components/
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Footer component
│   ├── MapComponent.tsx          # Interactive map
│   ├── RideSelector.tsx          # Ride type selector
│   └── BookingCard.tsx           # Booking display card
├── context/
│   └── BookingContext.tsx        # Booking state management
├── types/
│   └── index.ts                  # TypeScript type definitions
└── utils/
    └── fareCalculator.ts         # Fare calculation logic
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd ola-clone
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages Overview

### 1. Home Page (`/`)
- Hero section with call-to-action
- Features showcase
- Ride types with pricing
- How it works section
- Footer with links

### 2. Book Ride (`/book`)
- Location selection (pickup & drop)
- Interactive map with markers
- Ride type selection with fare estimates
- Booking summary
- Confirm booking button

### 3. Dashboard (`/dashboard`)
- Active rides section
- Past rides history
- Booking statistics (total rides, spent, distance)
- Detailed booking cards with driver info

## 🎨 Design Features

- **Color Scheme**: Yellow/Black theme matching Ola branding
- **Gradients**: Modern gradient backgrounds and buttons
- **Animations**: Smooth transitions and hover effects
- **Typography**: Clean, readable fonts
- **Icons**: Emoji-based icons for visual appeal
- **Cards**: Shadow-based card design with hover effects
- **Responsive**: Mobile-first approach with breakpoints

## 🗺️ Map Integration

The application uses Leaflet.js for interactive maps:
- Custom markers for pickup (green) and drop (red) locations
- Dashed route line between locations
- Auto-zoom to fit both markers
- OpenStreetMap tiles for map rendering

## 💰 Fare Calculation

Fare is calculated using:
- **Base Fare**: Fixed starting price per ride type
- **Distance Fare**: Price per kilometer × distance
- **Total Fare**: Base + Distance fare

Distance is calculated using the Haversine formula for accurate geographic distance between coordinates.

## 🔧 API Endpoints

### POST `/api/bookings`
Create a new booking
```json
{
  "pickup": { "lat": 12.9716, "lng": 77.5946, "address": "..." },
  "drop": { "lat": 12.9352, "lng": 77.6245, "address": "..." },
  "rideType": "sedan",
  "fare": 150,
  "distance": 5.2
}
```

### GET `/api/bookings`
Fetch all bookings

## 🎯 Demo Locations

Pre-configured locations in Bangalore:
- MG Road
- Koramangala
- Indiranagar
- Whitefield
- HSR Layout
- Malleshwaram

## 🔮 Future Enhancements

- User authentication and profiles
- Real-time driver tracking
- Payment gateway integration
- Ride history with filters
- Rating and review system
- Push notifications
- Database integration (PostgreSQL/MongoDB)
- Real-time WebSocket updates
- Multi-language support
- Promo codes and discounts

## 📝 License

This is a demo project created for educational purposes.

## 🤝 Contributing

This is a demonstration project. Feel free to fork and modify for your own use.

## 📧 Support

For issues or questions, please create an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
