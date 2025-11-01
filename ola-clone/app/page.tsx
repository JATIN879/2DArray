import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Move with Ola
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-900 max-w-2xl mx-auto">
              Book rides in seconds. Choose from Mini, Sedan, SUV, or Auto. Safe, affordable, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="bg-black text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Book a Ride Now
              </Link>
              <a
                href="#features"
                className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-xl"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Ola?</h2>
            <p className="text-xl text-gray-600">Experience the best ride-hailing service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quick Booking</h3>
              <p className="text-gray-700">
                Book your ride in seconds with our intuitive interface. Get matched with nearby drivers instantly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Affordable Prices</h3>
              <p className="text-gray-700">
                Transparent pricing with no hidden charges. Choose from multiple ride options to fit your budget.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Safe & Secure</h3>
              <p className="text-gray-700">
                Verified drivers, real-time tracking, and 24/7 support. Your safety is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ride Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Ride</h2>
            <p className="text-xl text-gray-600">Multiple options for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mini</h3>
              <p className="text-gray-600 mb-3">Affordable, compact rides</p>
              <p className="text-2xl font-bold text-yellow-600">₹10/km</p>
              <p className="text-sm text-gray-500">Base fare: ₹30</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-4xl mb-4">🚙</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sedan</h3>
              <p className="text-gray-600 mb-3">Comfortable sedans</p>
              <p className="text-2xl font-bold text-yellow-600">₹15/km</p>
              <p className="text-sm text-gray-500">Base fare: ₹50</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-4xl mb-4">🚐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SUV</h3>
              <p className="text-gray-600 mb-3">Spacious SUVs</p>
              <p className="text-2xl font-bold text-yellow-600">₹20/km</p>
              <p className="text-sm text-gray-500">Base fare: ₹80</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-4xl mb-4">🛺</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Auto</h3>
              <p className="text-gray-600 mb-3">Quick auto rides</p>
              <p className="text-2xl font-bold text-yellow-600">₹8/km</p>
              <p className="text-sm text-gray-500">Base fare: ₹20</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Book your ride in 3 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-black">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Enter Location</h3>
              <p className="text-gray-600">
                Enter your pickup and drop-off locations on our easy-to-use booking page.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-black">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Choose Ride</h3>
              <p className="text-gray-600">
                Select from Mini, Sedan, SUV, or Auto based on your preference and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-black">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Enjoy Ride</h3>
              <p className="text-gray-600">
                Get matched with a nearby driver and enjoy a safe, comfortable ride to your destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Move?
          </h2>
          <p className="text-xl text-gray-900 mb-8">
            Book your first ride today and experience the convenience of Ola.
          </p>
          <Link
            href="/book"
            className="inline-block bg-black text-yellow-400 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Book Your Ride Now
          </Link>
        </div>
      </section>
    </div>
  );
}
