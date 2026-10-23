'use client';

import { useState } from 'react';

export default function DriverSignup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    name: '',
    phone: '',
    email: '',
    // Step 2: Vehicle Info
    vehicleType: 'car',
    vehicleModel: '',
    vehiclePlate: '',
    vehicleYear: '',
    // Step 3: Documents
    idType: 'national_id',
    idNumber: '',
    // In production, these would be file uploads
    idPhoto: undefined as File | undefined,
    licensePhoto: undefined as File | undefined,
    vehiclePhoto: undefined as File | undefined,
    // Step 4: Agreement
    agreedToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would:
    // 1. Upload photos to Firebase Storage
    // 2. Create user in Firebase Auth
    // 3. Save driver data to Firestore
    // 4. Set status to "pending_verification"
    console.log('Driver signup data:', formData);
    alert('Application submitted! We will review your documents within 24-48 hours.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-2xl font-bold text-green-600">NegoRide</a>
            <span className="text-sm text-gray-500">Driver Sign Up</span>
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-2">Become a NegoRide Driver</h1>
          <p className="text-gray-600 mb-8">Join Liberia's fair ride-hailing platform. Set your own prices and earn more.</p>

          {/* Progress Indicator */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= s ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {s}
                </div>
                {s < 4 && <div className={`w-16 h-1 mx-2 ${step > s ? 'bg-green-600' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., 0777000000"
                  />
                  <p className="text-sm text-gray-500 mt-1">Must be MTN or Orange number</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!formData.name || !formData.phone}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Vehicle Information</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type *</label>
                  <select
                    required
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="car">🚗 Car</option>
                    <option value="motorcycle">🏍️ Motorcycle (Boda)</option>
                    <option value="kehkeh">🛺 Kehkeh (Tuk-tuk)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Model *</label>
                  <input
                    type="text"
                    required
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({...formData, vehicleModel: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Toyota Corolla, Honda PCX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">License Plate Number *</label>
                  <input
                    type="text"
                    required
                    value={formData.vehiclePlate}
                    onChange={(e) => setFormData({...formData, vehiclePlate: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., TX-4821"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Year</label>
                  <input
                    type="number"
                    value={formData.vehicleYear}
                    onChange={(e) => setFormData({...formData, vehicleYear: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., 2018"
                  />
                </div>

                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!formData.vehicleModel || !formData.vehiclePlate}
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Document Verification</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ID Type *</label>
                  <select
                    required
                    value={formData.idType}
                    onChange={(e) => setFormData({...formData, idType: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="national_id">National ID</option>
                    <option value="passport">Passport</option>
                    <option value="drivers_license">Driver's License</option>
                    <option value="voter_card">Voter Card</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ID Number *</label>
                  <input
                    type="text"
                    required
                    value={formData.idNumber}
                    onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your ID number"
                  />
                </div>

                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">📷</div>
                    <p className="font-medium mb-2">Upload ID Photo</p>
                    <p className="text-sm text-gray-500 mb-4">Clear photo of your ID document</p>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full"
                      onChange={(e) => setFormData({...formData, idPhoto: e.target.files?.[0]})}
                    />
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">📷</div>
                    <p className="font-medium mb-2">Upload Driver's License Photo</p>
                    <p className="text-sm text-gray-500 mb-4">Clear photo of your valid driver's license</p>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full"
                      onChange={(e) => setFormData({...formData, licensePhoto: e.target.files?.[0]})}
                    />
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">📷</div>
                    <p className="font-medium mb-2">Upload Vehicle Photo</p>
                    <p className="text-sm text-gray-500 mb-4">Clear photo showing vehicle and license plate</p>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full"
                      onChange={(e) => setFormData({...formData, vehiclePhoto: e.target.files?.[0]})}
                    />
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 border-2 border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    disabled={!formData.idNumber}
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>

                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Email:</strong> {formData.email || 'Not provided'}</p>
                  <p><strong>Vehicle:</strong> {formData.vehicleType} - {formData.vehicleModel}</p>
                  <p><strong>Plate:</strong> {formData.vehiclePlate}</p>
                  <p><strong>ID Type:</strong> {formData.idType}</p>
                  <p><strong>ID Number:</strong> {formData.idNumber}</p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">🎉 Special Offer for First 100 Drivers</h3>
                  <ul className="text-sm space-y-1">
                    <li>✅ 0% commission for first 3 months</li>
                    <li>✅ LRD 5,000 bonus after 20 rides</li>
                    <li>✅ LRD 1,000 for each driver referral</li>
                  </ul>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    checked={formData.agreedToTerms}
                    onChange={(e) => setFormData({...formData, agreedToTerms: e.target.checked})}
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the NegoRide Terms of Service and Driver Agreement. I confirm that all information provided is accurate and that I have a valid driver's license and vehicle registration.
                  </label>
                </div>

                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 border-2 border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.agreedToTerms}
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Already a driver? <a href="/driver" className="text-green-600 hover:underline">Go to Dashboard</a></p>
        </div>
      </main>
    </div>
  );
}
