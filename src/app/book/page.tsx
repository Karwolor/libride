'use client';

import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function BookRide() {
  const [service, setService] = useState('car');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('LRD');
  const [step, setStep] = useState(1);

  const liberianCities = [
    'Monrovia', 'Sinkor', 'Paynesville', 'ELWA Junction', 'Red Light',
    'Congo Town', 'Bardnersville', 'New Kru Town', 'Bushrod Island'
  ];

  const handleContinue = () => {
    if (step === 1 && pickup && destination) {
      setStep(2);
    } else if (step === 2 && price) {
      setStep(3);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">LibRide</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Book Your Ride</h1>
          <p className="text-gray-600 dark:text-gray-400">Set your price and choose your driver</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transition-colors duration-300">
            <div className="flex space-x-2 mb-6">
              <button
                onClick={() => setService('car')}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  service === 'car'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                🚗 Car
              </button>
              <button
                onClick={() => setService('motorcycle')}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  service === 'motorcycle'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                🏍️ Motorcycle
              </button>
              <button
                onClick={() => setService('kehkeh')}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  service === 'kehkeh'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                🛺 Kehkeh
              </button>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Pickup Location</label>
                  <select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  >
                    <option value="">Select pickup location</option>
                    {liberianCities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Destination</label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  >
                    <option value="">Select destination</option>
                    {liberianCities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleContinue}
                  disabled={!pickup || !destination}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                  <p className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <span className="font-semibold">From:</span> {pickup} <br />
                    <span className="font-semibold">To:</span> {destination} <br />
                    <span className="font-semibold">Service:</span> {service}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Offer Price</label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Enter amount"
                      className="flex-1 p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    />
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    >
                      <option value="LRD">LRD ($)</option>
                      <option value="USD">USD ($)</option>
                    </select>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center">
                    <span className="mr-2">💡</span>
                    Drivers can accept or make a counter-offer
                  </p>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 py-4 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleContinue}
                    disabled={!price}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Find Drivers
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                  <p className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <span className="font-semibold">From:</span> {pickup} <br />
                    <span className="font-semibold">To:</span> {destination} <br />
                    <span className="font-semibold">Your Offer:</span> {price} {currency}
                  </p>
                </div>

                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-400">Finding nearby drivers...</p>
                </div>

                <div className="space-y-3">
                  <div className="border-2 border-gray-200 dark:border-gray-600 rounded-xl p-4 hover:border-green-500 dark:hover:border-green-400 cursor-pointer transition-all duration-300 hover:shadow-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">Emmanuel K.</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Toyota Corolla • TX-4821</p>
                        <p className="text-sm text-green-600 dark:text-green-400">⭐ 4.8 • 342 trips</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600 dark:text-green-400">{price} {currency}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">2 min away</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-gray-200 dark:border-gray-600 rounded-xl p-4 hover:border-green-500 dark:hover:border-green-400 cursor-pointer transition-all duration-300 hover:shadow-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">James T.</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Honda Civic • TX-3125</p>
                        <p className="text-sm text-green-600 dark:text-green-400">⭐ 4.9 • 512 trips</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-orange-600 dark:text-orange-400">{parseInt(price) + 50} {currency}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Counter-offer</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">3 min away</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-gray-200 dark:border-gray-600 rounded-xl p-4 hover:border-green-500 dark:hover:border-green-400 cursor-pointer transition-all duration-300 hover:shadow-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">Sarah M.</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Nissan Sunny • TX-5678</p>
                        <p className="text-sm text-green-600 dark:text-green-400">⭐ 4.7 • 189 trips</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600 dark:text-green-400">{price} {currency}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">5 min away</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setStep(1)}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-4 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  Cancel Request
                </button>
              </div>
            )}
          </div>

          <div className="hidden lg:block">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 h-[600px] transition-colors duration-300">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
