// Firebase Configuration
// Project: libride-38329
// Auth: Phone Authentication enabled
// Database: Firestore (nam5 us-central)

import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4DYqpWtRjpb9UPNTxvjWhZB-paR48Oi0",
  authDomain: "libride-38329.firebaseapp.com",
  projectId: "libride-38329",
  storageBucket: "libride-38329.firebasestorage.app",
  messagingSenderId: "833454616352",
  appId: "1:833454616352:web:d9bc5fc73d074230123145"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);

// Database types for TypeScript
export interface User {
  id: string;
  name: string;
  phone: string;
  role: 'rider' | 'driver';
  rating: number;
  totalTrips: number;
  createdAt: Date;
}

export interface Driver {
  id: string;
  userId: string;
  vehicleType: 'car' | 'motorcycle' | 'kehkeh';
  vehiclePlate: string;
  vehicleModel: string;
  isOnline: boolean;
  currentLocation?: {
    lat: number;
    lng: number;
  };
  rating: number;
  totalRides: number;
  verified: boolean;
  documents: {
    idPhoto: string;
    licensePhoto: string;
    vehiclePhoto: string;
  };
}

export interface Ride {
  id: string;
  passengerId: string;
  driverId?: string;
  pickup: string;
  destination: string;
  offeredPrice: number;
  finalPrice?: number;
  currency: 'LRD' | 'USD';
  service: 'car' | 'motorcycle' | 'kehkeh';
  status: 'pending' | 'accepted' | 'counter_offered' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: Date;
  completedAt?: Date;
}

export interface DeliveryRequest {
  id: string;
  senderId: string;
  courierId?: string;
  pickup: string;
  destination: string;
  weight: number;
  type: 'courier' | 'freight';
  offeredPrice: number;
  finalPrice?: number;
  currency: 'LRD' | 'USD';
  status: 'pending' | 'accepted' | 'counter_offered' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: Date;
  completedAt?: Date;
}
