'use client';

import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">LibRide</span>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Liberia</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors">Services</a>
              <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors">How It Works</a>
              <a href="#safety" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors">Safety</a>
              <ThemeToggle />
              <a href="/book" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2.5 rounded-lg hover:from-green-700 hover:to-emerald-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Book a Ride
              </a>
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
              <span className="text-green-700 dark:text-green-400 font-semibold text-sm">🎉 Now Available in Monrovia</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Your Ride,<br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Your Price</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Liberia's fair ride-hailing app. Set your own fare, negotiate with drivers, and travel across Monrovia and beyond with complete transparency.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/book" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-emerald-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Book a Ride
              </a>
              <a href="/driver-signup" className="border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300">
                Become a Driver
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">No Surge Pricing</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Fair Negotiation</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Verified Drivers</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white dark:bg-gray-800 py-20 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Our Services</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">Choose from multiple transportation options tailored to your needs</p>
            <div className="grid md:grid-cols-4 gap-6">
              <a href="/book" className="group text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-green-100 dark:border-gray-600">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">🚗</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">City Rides</h3>
                <p className="text-gray-600 dark:text-gray-300">Everyday rides in Monrovia with fare negotiation</p>
              </a>
              <a href="/book" className="group text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-green-100 dark:border-gray-600">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">🏍️</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Motorcycle</h3>
                <p className="text-gray-600 dark:text-gray-300">Quick bike rides through traffic</p>
              </a>
              <a href="/delivery" className="group text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-green-100 dark:border-gray-600">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">📦</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300">Send parcels across the city with live tracking</p>
              </a>
              <a href="/delivery" className="group text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-green-100 dark:border-gray-600">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">🚚</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Freight</h3>
                <p className="text-gray-600 dark:text-gray-300">Trucks for moving and cargo transport</p>
              </a>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">Get started in just 4 simple steps</p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">1</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Set Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Enter pickup and destination</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">2</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Offer Your Price</h3>
                <p className="text-gray-600 dark:text-gray-400">Set the fare you're willing to pay</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">3</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Choose Driver</h3>
                <p className="text-gray-600 dark:text-gray-400">Compare offers and select your driver</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">4</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Track & Ride</h3>
                <p className="text-gray-600 dark:text-gray-400">Live GPS tracking and safe arrival</p>
              </div>
            </div>
          </div>
        </section>

        <section id="safety" className="bg-white dark:bg-gray-800 py-20 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Safety First</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">Your safety is our top priority</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Verified Drivers</h3>
                <p className="text-gray-600 dark:text-gray-400">All drivers are identity-checked and verified</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Live Tracking</h3>
                <p className="text-gray-600 dark:text-gray-400">Share your ride with family in real-time</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🆘</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">SOS Button</h3>
                <p className="text-gray-600 dark:text-gray-400">Emergency support with one tap</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Ride?</h2>
            <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
              Pay with MTN Mobile Money, Orange Money, or Cash
            </p>
            <a href="/book" className="inline-block bg-white text-green-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Get Started Now
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <span className="text-2xl font-bold">LibRide</span>
              </div>
              <p className="text-gray-400">Liberia's fair ride-hailing app built for everyone.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>City Rides</li>
                <li>Motorcycle</li>
                <li>Delivery</li>
                <li>Freight</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Cities</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monrovia</li>
                <li>Sinkor</li>
                <li>Paynesville</li>
                <li>ELWA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Payment</h4>
              <ul className="space-y-2 text-gray-400">
                <li>MTN Mobile Money</li>
                <li>Orange Money</li>
                <li>Cash (LRD/USD)</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 LibRide Liberia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
