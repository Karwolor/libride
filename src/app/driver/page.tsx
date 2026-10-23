'use client';

import { useState } from 'react';

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
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-2xl font-bold text-green-600">NegoRide</a>
            <span className="text-sm text-gray-500">Driver Dashboard</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome, Driver</h1>
          <button
            onClick={() => setIsOnline(!isOnline)}
            className={`px-6 py-3 rounded-lg font-semibold ${isOnline ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            {isOnline ? '🟢 Online' : '⚫ Go Online'}
          </button>
        </div>

        {!isOnline ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🚗</div>
            <h2 className="text-2xl font-bold mb-4">Driver Dashboard</h2>
            <p className="text-gray-600 mb-6">
              This is the driver dashboard. In production, you'll need to sign up and be verified first.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => setIsOnline(true)}
                className="w-full bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Go Online Now
              </button>
              <a
                href="/driver-signup"
                className="block w-full border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                Sign Up as New Driver
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">🚗 Ride Requests</h2>
              <div className="space-y-4">
                {rideRequests.map((request) => (
                  <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold">{request.passenger}</p>
                        <p className="text-sm text-gray-600">
                          {request.pickup} → {request.destination}
                        </p>
                        <p className="text-sm text-gray-500">
                          {request.distance} • {request.service === 'car' ? '🚗 Car' : '🏍️ Motorcycle'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">
                          {request.offer} {request.currency}
                        </p>
                        <p className="text-sm text-gray-500">Passenger offer</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                        Accept
                      </button>
                      <button
                        onClick={() => setSelectedRequest(request.id)}
                        className="flex-1 border-2 border-green-600 text-green-600 py-2 rounded-lg font-semibold hover:bg-green-50 transition"
                      >
                        Counter-Offer
                      </button>
                      <button className="px-4 border-2 border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-50 transition">
                        Decline
                      </button>
                    </div>
                    {selectedRequest === request.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex space-x-2">
                          <input
                            type="number"
                            value={counterOffer}
                            onChange={(e) => setCounterOffer(e.target.value)}
                            placeholder="Your price"
                            className="flex-1 p-2 border border-gray-300 rounded-lg"
                          />
                          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition">
                            Send Offer
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">📦 Delivery Requests</h2>
              <div className="space-y-4">
                {deliveryRequests.map((request) => (
                  <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold">{request.sender}</p>
                        <p className="text-sm text-gray-600">
                          {request.pickup} → {request.destination}
                        </p>
                        <p className="text-sm text-gray-500">
                          {request.weight} • {request.type === 'courier' ? '📦 Courier' : '🚚 Freight'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">
                          {request.offer} {request.currency}
                        </p>
                        <p className="text-sm text-gray-500">Sender offer</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                        Accept
                      </button>
                      <button
                        onClick={() => setSelectedRequest(request.id)}
                        className="flex-1 border-2 border-green-600 text-green-600 py-2 rounded-lg font-semibold hover:bg-green-50 transition"
                      >
                        Counter-Offer
                      </button>
                      <button className="px-4 border-2 border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-50 transition">
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold mb-2">💡 Tips for More Offers</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Keep your profile complete and updated</li>
                <li>• Maintain a high rating by providing excellent service</li>
                <li>• Respond quickly to requests</li>
                <li>• Make reasonable counter-offers that reflect market rates</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
