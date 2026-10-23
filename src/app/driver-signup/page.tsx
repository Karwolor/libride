'use client';

import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function DriverSignup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleType: 'car',
    vehicleModel: '',
    vehiclePlate: '',
    vehicleYear: '',
    idType: 'national_id',
    idNumber: '',
    idPhoto: undefined as File | undefined,
    licensePhoto: undefined as File | undefined,
    vehiclePhoto: undefined as File | undefined,
    agreedToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Driver signup data:', formData);
    alert('Application submitted! We will review your documents within 24-48 hours.');
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

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Become a LibRide Driver</h1>
          <p className="text-gray-600 dark:text-gray-400">Join Liberia's fair ride-hailing platform. Set your own prices and earn more.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all duration-300 ${
                  step >= s ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {s}
                </div>
                {s < 4 && <div className={`w-16 h-1 mx-2 ${step > s ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-gray-200 dark:bg-gray-700'}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="e.g., 0777000000"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Must be MTN or Orange number</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!formData.name || !formData.phone}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Vehicle Information</h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Vehicle Type *</label>
                  <select
                    required
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  >
                    <option value="car">🚗 Car</option>
                    <option value="motorcycle">🏍️ Motorcycle (Boda)</option>
                    <option value="kehkeh">🛺 Kehkeh (Tuk-tuk)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Vehicle Model *</label>
                  <input
                    type="text"
                    required
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({...formData, vehicleModel: e.target.value})}
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="e.g., Toyota Corolla, Honda PCX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">License Plate Number *</label>
                  <input
                    type="text"
                    required
                    value={formData.vehiclePlate}
                    onChange={(e) => setFormData({...formData, vehiclePlate: e.target.value})}
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="e.g., TX-4821"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Vehicle Year</label>
                  <input
                    type="number"
                    value={formData.vehicleYear}
                    onChange={(e) => setFormData({...formData, vehicleYear: e.target.value})}
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="e.g., 2018"
                  />
                </div>

                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 py-4 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!formData.vehicleModel || !formData.vehiclePlate}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Document Verification</h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">ID Type *</label>
                  <select
                    required
                    value={formData.idType}
                    onChange={(e) => setFormData({...formData, idType: e.target.value})}
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  >
                    <option value="national_id">National ID</option>
                    <option value="passport">Passport</option>
                    <option value="drivers_license">Driver's License</option>
                    <option value="voter_card">Voter Card</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">ID Number *</label>
                  <input
                    type="text"
                    required
                    value={formData.idNumber}
                    onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="Enter your ID number"
                  />
                </div>

                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center hover:border-green-500 dark:hover:border-green-400 transition-colors">
                    <div className="text-4xl mb-2">📷</div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-white">Upload ID Photo</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Clear photo of your ID document</p>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full"
                      onChange={(e) => setFormData({...formData, idPhoto: e.target.files?.[0]})}
                    />
                  </div>

                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center hover:border-green-500 dark:hover:border-green-400 transition-colors">
                    <div className="text-4xl mb-2">📷</div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-white">Upload Driver's License Photo</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Clear photo of your valid driver's license</p>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full"
                      onChange={(e) => setFormData({...formData, licensePhoto: e.target.files?.[0]})}
                    />
                  </div>

                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center hover:border-green-500 dark:hover:border-green-400 transition-colors">
                    <div className="text-4xl mb-2">📷</div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-white">Upload Vehicle Photo</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Clear photo showing vehicle and license plate</p>
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
                    className="flex-1 border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 py-4 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    disabled={!formData.idNumber}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Review & Submit</h2>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 space-y-2">
                  <p className="text-gray-700 dark:text-gray-300"><strong>Name:</strong> {formData.name}</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Phone:</strong> {formData.phone}</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> {formData.email || 'Not provided'}</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Vehicle:</strong> {formData.vehicleType} - {formData.vehicleModel}</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Plate:</strong> {formData.vehiclePlate}</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>ID Type:</strong> {formData.idType}</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>ID Number:</strong> {formData.idNumber}</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                  <h3 className="font-bold mb-3 text-gray-900 dark:text-white">🎉 Special Offer for First 100 Drivers</h3>
                  <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><span className="mr-2">✅</span> 0% commission for first 3 months</li>
                    <li className="flex items-center"><span className="mr-2">✅</span> LRD 5,000 bonus after 20 rides</li>
                    <li className="flex items-center"><span className="mr-2">✅</span> LRD 1,000 for each driver referral</li>
                  </ul>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    checked={formData.agreedToTerms}
                    onChange={(e) => setFormData({...formData, agreedToTerms: e.target.checked})}
                    className="mt-1 w-5 h-5 text-green-600 rounded"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
                    I agree to the LibRide Terms of Service and Driver Agreement. I confirm that all information provided is accurate and that I have a valid driver's license and vehicle registration.
                  </label>
                </div>

                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 py-4 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.agreedToTerms}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>Already a driver? <a href="/driver" className="text-green-600 dark:text-green-400 hover:underline font-semibold">Go to Dashboard</a></p>
        </div>
      </main>
    </div>
  );
}
