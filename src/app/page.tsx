export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-600">NegoRide</span>
              <span className="ml-2 text-sm text-gray-500">Liberia</span>
            </div>
            <div className="flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-green-600">Services</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600">How It Works</a>
              <a href="#safety" className="text-gray-700 hover:text-green-600">Safety</a>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Download App
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your Ride, Your Price
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Liberia's fair ride-hailing app. Set your own fare, negotiate with drivers, and travel across Monrovia and beyond.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/book" className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
                Book a Ride
              </a>
              <a href="/driver-signup" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition">
                Become a Driver
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <a href="/book" className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition cursor-pointer">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-xl font-semibold mb-2">City Rides</h3>
                <p className="text-gray-600">Everyday rides in Monrovia with fare negotiation</p>
              </a>
              <a href="/book" className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition cursor-pointer">
                <div className="text-4xl mb-4">🏍️</div>
                <h3 className="text-xl font-semibold mb-2">Motorcycle</h3>
                <p className="text-gray-600">Quick bike rides through traffic</p>
              </a>
              <a href="/delivery" className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition cursor-pointer">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-semibold mb-2">Delivery</h3>
                <p className="text-gray-600">Send parcels across the city with live tracking</p>
              </a>
              <a href="/delivery" className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition cursor-pointer">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-semibold mb-2">Freight</h3>
                <p className="text-gray-600">Trucks for moving and cargo transport</p>
              </a>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Set Location</h3>
                <p className="text-gray-600">Enter pickup and destination</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Offer Your Price</h3>
                <p className="text-gray-600">Set the fare you're willing to pay</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Choose Driver</h3>
                <p className="text-gray-600">Compare offers and select your driver</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Track & Ride</h3>
                <p className="text-gray-600">Live GPS tracking and safe arrival</p>
              </div>
            </div>
          </div>
        </section>

        <section id="safety" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Safety First</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold mb-2">Verified Drivers</h3>
                <p className="text-gray-600">All drivers are identity-checked and verified</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-semibold mb-2">Live Tracking</h3>
                <p className="text-gray-600">Share your ride with family in real-time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🆘</div>
                <h3 className="text-xl font-semibold mb-2">SOS Button</h3>
                <p className="text-gray-600">Emergency support with one tap</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Ride?</h2>
            <p className="text-green-100 mb-8 text-lg">
              Pay with MTN Mobile Money, Orange Money, or Cash
            </p>
            <a href="/book" className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition">
              Get Started Now
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NegoRide</h3>
              <p className="text-gray-400">Liberia's fair ride-hailing app built for everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>City Rides</li>
                <li>Motorcycle</li>
                <li>Delivery</li>
                <li>Freight</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Cities</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monrovia</li>
                <li>Sinkor</li>
                <li>Paynesville</li>
                <li>ELWA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Payment</h4>
              <ul className="space-y-2 text-gray-400">
                <li>MTN Mobile Money</li>
                <li>Orange Money</li>
                <li>Cash (LRD/USD)</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 NegoRide Liberia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
