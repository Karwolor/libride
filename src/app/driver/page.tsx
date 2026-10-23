'use client';

import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function DriverDashboard() {
  const [isOnline, setIsOnline] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<number | null>(null);
  const [counterOffer, setCounterOffer] = useState('');

  const rideRequests = [
    {
      id: 1,
      passenger: 'John D.',
      pickup: 'Monrovia',
      destination: 'Sinkor',
      offer: 500,
      currency: 'LRD',
      distance: '3.2 km',
      service: 'car',
      rating: 4.5
    },
    {
      id: 2,
      passenger: 'Mary K.',
      pickup: 'ELWA Junction',
      destination: 'Red Light',
      offer: 750,
      currency: 'LRD',
      distance: '5.8 km',
      service: 'car',
      rating: 4.8
    },
    {
      id: 3,
      passenger: 'Robert T.',
      pickup: 'Paynesville',
      destination: 'Congo Town',
      offer: 400,
      currency: 'LRD',
      distance: '2.5 km',
      service: 'motorcycle',
      rating: 4.2
    }
  ];

  const deliveryRequests = [
    {
      id: 4,
      sender: 'Business Center',
      pickup: 'Monrovia',
      destination: 'Bardnersville',
      offer: 600,
      currency: 'LRD',
      weight: '15 kg',
      type: 'courier'
    },
    {
      id: 5,
      sender: 'Market Vendor',
      pickup: 'Red Light',
      destination: 'Sinkor',
      offer: 350,
      currency: 'LRD',
      weight: '8 kg',
      type: 'courier'
    }
  ];

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

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Driver Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage your rides and earnings</p>
          </div>
          <button
            onClick={() => setIsOnline(!isOnline)}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg ${
              isOnline
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {isOnline ? '🟢 Online' : '⚫ Go Online'}
          </button>
        </div>

        {!isOnline ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 text-center transition-colors duration-300">
            <div className="text-7xl mb-6">🚗</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Go Online to Start Earning</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
              When you're online, you'll receive ride and delivery requests from nearby passengers.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => setIsOnline(true)}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Go Online Now
              </button>
              <a
                href="/driver-signup"
                className="block w-full border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
              >
                Sign Up as New Driver
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transition-colors duration-300">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="mr-2">🚗</span> Ride Requests
              </h2>
              <div className="space-y-4">
                {rideRequests.map((request) => (
                  <div key={request.id} className="border-2 border-gray-200 dark:border-gray-600 rounded-xl p-5 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="font-bold text-lg text-gray-900 dark:text-white">{request.passenger}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {request.pickup} → {request.destination}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {request.distance} • {request.service === 'car' ? '🚗 Car' : '🏍️ Motorcycle'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {request.offer} {request.currency}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Passenger offer</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-md">
                        Accept
                      </button>
                      <button
                        onClick={() => setSelectedRequest(request.id)}
                        className="flex-1 border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 py-3 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                      >
                        Counter-Offer
                      </button>
                      <button className="px-4 border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                        Decline
                      </button>
                    </div>
                    {selectedRequest === request.id && (
                      <div className="mt-4 pt-4 border-t-2 border-gray-200 dark:border-gray-600">
                        <div className="flex space-x-2">
                          <input
                            type="number"
                            value={counterOffer}
                            onChange={(e) => setCounterOffer(e.target.value)}
                            placeholder="Your price"
                            className="flex-1 p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                          />
                          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md">
                            Send Offer
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transition-colors duration-300">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="mr-2">📦</span> Delivery Requests
              </h2>
              <div className="space-y-4">
                {deliveryRequests.map((request) => (
                  <div key={request.id} className="border-2 border-gray-200 dark:border-gray-600 rounded-xl p-5 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="font-bold text-lg text-gray-900 dark:text-white">{request.sender}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {request.pickup} → {request.destination}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {request.weight} • {request.type === 'courier' ? '📦 Courier' : '🚚 Freight'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {request.offer} {request.currency}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Sender offer</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-md">
                        Accept
                      </button>
                      <button
                        onClick={() => setSelectedRequest(request.id)}
                        className="flex-1 border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 py-3 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                      >
                        Counter-Offer
                      </button>
                      <button className="px-4 border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="font-bold mb-3 text-gray-900 dark:text-white">💡 Tips for More Offers</h3>
              <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start"><span className="mr-2">•</span> Keep your profile complete and updated</li>
                <li className="flex items-start"><span className="mr-2">•</span> Maintain a high rating by providing excellent service</li>
                <li className="flex items-start"><span className="mr-2">•</span> Respond quickly to requests</li>
                <li className="flex items-start"><span className="mr-2">•</span> Make reasonable counter-offers that reflect market rates</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
