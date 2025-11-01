# 🚀 Quick Start Guide

## Get Started in 3 Steps

### Step 1: Start the Development Server
```bash
cd ola-clone
npm run dev
```

The application will be available at **http://localhost:3000**

### Step 2: Explore the Application

#### 🏠 Home Page (http://localhost:3000)
- View the landing page with all features
- Click "Book a Ride Now" to start booking

#### 🚗 Book a Ride (http://localhost:3000/book)
1. Select a **pickup location** from the dropdown
2. Select a **drop location** from the dropdown
3. View the route on the interactive map
4. Choose your **ride type** (Mini, Sedan, SUV, or Auto)
5. Review the **fare estimate**
6. Click **"Confirm Booking"**

#### 📊 Dashboard (http://localhost:3000/dashboard)
- View all your bookings
- See active and past rides
- Check statistics (total rides, spent, distance)

### Step 3: Test the Booking Flow

**Example Booking:**
1. Go to `/book`
2. Pickup: "MG Road, Bangalore"
3. Drop: "Koramangala, Bangalore"
4. Select: "Sedan"
5. Fare: ~₹128 (5.2 km × ₹15 + ₹50 base)
6. Confirm booking
7. View in dashboard

## 📱 Available Demo Locations

1. **MG Road, Bangalore** (12.9716, 77.5946)
2. **Koramangala, Bangalore** (12.9352, 77.6245)
3. **Indiranagar, Bangalore** (13.0358, 77.5970)
4. **Whitefield, Bangalore** (12.9698, 77.7500)
5. **HSR Layout, Bangalore** (12.9279, 77.6271)
6. **Malleshwaram, Bangalore** (13.0097, 77.5505)

## 🎯 Key Features to Test

### ✅ Fare Calculator
- Try different location combinations
- Compare prices across ride types
- Notice base fare + distance calculation

### ✅ Interactive Map
- Watch markers appear for pickup/drop
- See the dashed route line
- Map auto-zooms to fit both locations

### ✅ Ride Selection
- Hover over ride cards
- See real-time fare estimates
- Notice ETA and capacity info

### ✅ Booking Management
- Create multiple bookings
- View them in dashboard
- Check driver assignments
- See booking statistics

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

## 🎨 Customization Tips

### Change Colors
Edit `app/globals.css` and Tailwind classes:
- Yellow: `yellow-400`, `yellow-600`
- Black: `black`, `gray-900`

### Add More Locations
Edit `app/book/page.tsx`:
```typescript
const DEMO_LOCATIONS = [
  { lat: XX.XXXX, lng: XX.XXXX, address: 'Your Location' },
  // Add more...
];
```

### Modify Pricing
Edit `utils/fareCalculator.ts`:
```typescript
export const RIDE_OPTIONS = [
  {
    id: 'mini',
    pricePerKm: 10,  // Change this
    basePrice: 30,   // Change this
    // ...
  },
];
```

### Add New Ride Types
1. Update `types/index.ts` - add to RideType
2. Update `utils/fareCalculator.ts` - add to RIDE_OPTIONS
3. Update `components/RideSelector.tsx` - add emoji icon

## 🐛 Troubleshooting

### Map Not Loading?
- Check internet connection (needs OpenStreetMap tiles)
- Verify Leaflet CSS is loaded in `app/layout.tsx`
- Check browser console for errors

### Build Errors?
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### TypeScript Errors?
```bash
# Check types
npx tsc --noEmit

# Regenerate route types
npm run build
```

### Port Already in Use?
```bash
# Use different port
npm run dev -- -p 3001
```

## 📚 Project Structure Overview

```
ola-clone/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page
│   ├── book/              # Booking page
│   ├── dashboard/         # Dashboard page
│   └── api/bookings/      # API endpoints
├── components/            # React components
├── context/              # State management
├── types/                # TypeScript types
├── utils/                # Helper functions
└── public/               # Static assets
```

## 🎓 Next Steps

1. **Add Authentication**: Implement user login/signup
2. **Database**: Replace in-memory storage with PostgreSQL
3. **Real-time**: Add WebSocket for live updates
4. **Payment**: Integrate payment gateway
5. **Mobile App**: Build React Native version
6. **Testing**: Add Jest and Cypress tests

## 💡 Pro Tips

- Use browser DevTools to inspect API calls
- Check Network tab for booking requests
- Use React DevTools to view component state
- Test responsive design with device emulation
- Try different screen sizes

## 🌟 Demo Workflow

**Complete User Journey:**
1. Land on home page → See features
2. Click "Book Now" → Go to booking page
3. Select locations → See map update
4. Choose ride type → See fare estimate
5. Confirm booking → Redirect to dashboard
6. View booking details → See driver info
7. Check statistics → See total rides/spent

---

**Enjoy building with Ola Clone! 🚗💨**

For detailed documentation, see [README.md](./README.md) and [FEATURES.md](./FEATURES.md)
