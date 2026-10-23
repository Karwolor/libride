'use client';

import { useState } from 'react';

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
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-2xl font-bold text-green-600">NegoRide</a>
            <span className="text-sm text-gray-500">Liberia</span>
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Send a Package</h1>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setDeliveryType('courier')}
              className={`flex-1 py-3 rounded-lg font-semibold ${deliveryType === 'courier' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              📦 Courier (up to 20kg)
            </button>
            <button
              onClick={() => setDeliveryType('freight')}
              className={`flex-1 py-3 rounded-lg font-semibold ${deliveryType === 'freight' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              🚚 Freight (20kg+)
            </button>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                <select
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select pickup location</option>
                  {liberianCities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select destination</option>
                  {liberianCities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Package Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter weight"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={handleContinue}
                disabled={!pickup || !destination || !weight}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600">
                  <strong>From:</strong> {pickup} <br />
                  <strong>To:</strong> {destination} <br />
                  <strong>Type:</strong> {deliveryType} <br />
                  <strong>Weight:</strong> {weight} kg
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Offer Price</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter amount"
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="LRD">LRD ($)</option>
                    <option value="USD">USD ($)</option>
                  </select>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  💡 Couriers can accept or make a counter-offer
                </p>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border-2 border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                >
                  Back
                </button>
                <button
                  onClick={handleContinue}
                  disabled={!price}
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                >
                  Find Couriers
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600">
                  <strong>From:</strong> {pickup} <br />
                  <strong>To:</strong> {destination} <br />
                  <strong>Your Offer:</strong> {price} {currency}
                </p>
              </div>

              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Finding nearby couriers...</p>
              </div>

              <div className="space-y-3">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-green-500 cursor-pointer transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Samuel B.</p>
                      <p className="text-sm text-gray-600">Motorcycle • Verified</p>
                      <p className="text-sm text-green-600">⭐ 4.9 • 423 deliveries</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{price} {currency}</p>
                      <p className="text-sm text-gray-500">3 min away</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:border-green-500 cursor-pointer transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Patricia D.</p>
                      <p className="text-sm text-gray-600">Car • Verified</p>
                      <p className="text-sm text-green-600">⭐ 4.8 • 289 deliveries</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-orange-600">{parseInt(price) + 30} {currency}</p>
                      <p className="text-sm text-gray-500">Counter-offer</p>
                      <p className="text-sm text-gray-500">5 min away</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setStep(1)}
                className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
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
