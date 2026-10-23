'use client';

import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Delivery() {
  const [deliveryType, setDeliveryType] = useState('courier');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('LRD');
  const [step, setStep] = useState(1);

  const liberianCities = [
    'Monrovia', 'Sinkor', 'Paynesville', 'ELWA Junction', 'Red Light',
    'Congo Town', 'Bardnersville', 'New Kru Town', 'Bushrod Island'
  ];

  const handleContinue = () => {
    if (step === 1 && pickup && destination && weight) {
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

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Send a Package</h1>
          <p className="text-gray-600 dark:text-gray-400">Fast and reliable delivery across Liberia</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transition-colors duration-300">
          <div className="flex space-x-2 mb-6">
            <button
              onClick={() => setDeliveryType('courier')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                deliveryType === 'courier'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              📦 Courier (up to 20kg)
            </button>
            <button
              onClick={() => setDeliveryType('freight')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                deliveryType === 'freight'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              🚚 Freight (20kg+)
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
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Delivery Address</label>
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

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Package Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter weight"
                  className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                />
              </div>

              <button
                onClick={handleContinue}
                disabled={!pickup || !destination || !weight}
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
                  <span className="font-semibold">Type:</span> {deliveryType} <br />
                  <span className="font-semibold">Weight:</span> {weight} kg
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
                  Couriers can accept or make a counter-offer
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
                  Find Couriers
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
                <p className="text-gray-600 dark:text-gray-400">Finding nearby couriers...</p>
              </div>

              <div className="space-y-3">
                <div className="border-2 border-gray-200 dark:border-gray-600 rounded-xl p-4 hover:border-green-500 dark:hover:border-green-400 cursor-pointer transition-all duration-300 hover:shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">Samuel B.</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Motorcycle • Verified</p>
                      <p className="text-sm text-green-600 dark:text-green-400">⭐ 4.9 • 423 deliveries</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600 dark:text-green-400">{price} {currency}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">3 min away</p>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-gray-200 dark:border-gray-600 rounded-xl p-4 hover:border-green-500 dark:hover:border-green-400 cursor-pointer transition-all duration-300 hover:shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">Patricia D.</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Car • Verified</p>
                      <p className="text-sm text-green-600 dark:text-green-400">⭐ 4.8 • 289 deliveries</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-orange-600 dark:text-orange-400">{parseInt(price) + 30} {currency}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Counter-offer</p>
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
      </main>
    </div>
  );
}
