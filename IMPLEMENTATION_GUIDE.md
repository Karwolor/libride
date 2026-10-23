# NegoRide Implementation Guide

## 1. Backend Development

### Option A: Low-Code/No-Code (Fastest, Cheapest)
**Recommended for MVP launch**

#### Firebase Setup (Free Tier)
```bash
npm install firebase
```

**Benefits:**
- Free up to certain limits
- Built-in authentication
- Real-time database
- Easy to scale

**Implementation Steps:**
1. Go to [firebase.google.com](https://firebase.google.com)
2. Create new project "NegoRide"
3. Enable Authentication (Email/Password, Phone)
4. Create Firestore Database
5. Enable Realtime Database for live ride matching

**Database Structure:**
```
users/
  {userId}/
    name: string
    phone: string
    role: "rider" | "driver"
    rating: number
    totalTrips: number

drivers/
  {driverId}/
    userId: string
    vehicleType: "car" | "motorcycle" | "kehkeh"
    vehiclePlate: string
    isOnline: boolean
    currentLocation: {lat, lng}
    rating: number
    verified: boolean

rides/
  {rideId}/
    passengerId: string
    driverId: string (null until accepted)
    pickup: string
    destination: string
    offeredPrice: number
    currency: "LRD" | "USD"
    status: "pending" | "accepted" | "in_progress" | "completed"
    createdAt: timestamp

delivery_requests/
  {requestId}/
    senderId: string
    courierId: string
    pickup: string
    destination: string
    weight: number
    type: "courier" | "freight"
    offeredPrice: number
    status: "pending" | "accepted" | "in_progress" | "completed"
```

#### Supabase Alternative (Also Free)
```bash
npm install @supabase/supabase-js
```

**Benefits:**
- PostgreSQL database (more powerful than Firebase)
- Built-in authentication
- Real-time subscriptions
- Free tier generous

### Option B: Custom Backend (More Control)
**Node.js + Express + PostgreSQL**

```bash
npm install express pg bcrypt jsonwebtoken cors
```

**Setup:**
1. Set up PostgreSQL database (free on Railway, Neon, or Supabase)
2. Create Express API server
3. Implement JWT authentication
4. Build REST API endpoints

**Key API Endpoints:**
```
POST /api/auth/register
POST /api/auth/login
POST /api/rides/create
GET /api/rides/nearby
POST /api/rides/accept
POST /api/rides/counter-offer
GET /api/driver/status
POST /api/driver/toggle-online
```

### Recommendation: Start with Firebase
- Faster to implement (1-2 weeks)
- Free for MVP
- Easy to migrate later if needed
- Built-in real-time features perfect for ride matching

---

## 2. Authentication System

### Firebase Authentication Implementation

**Install:**
```bash
npm install firebase
```

**Create `src/lib/firebase.ts`:**
```typescript
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "negoride.firebaseapp.com",
  projectId: "negoride",
  storageBucket: "negoride.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
```

**Phone Authentication (Best for Liberia):**
```typescript
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// In your signup component
const setupRecaptcha = () => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'invisible',
    });
  }
};

const handlePhoneSignup = async (phoneNumber: string) => {
  setupRecaptcha();
  try {
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
    // Ask user for OTP
    const code = prompt('Enter OTP:');
    await confirmationResult.confirm(code);
    // User signed in!
  } catch (error) {
    console.error(error);
  }
};
```

**Driver Verification Flow:**
1. User signs up with phone number
2. Uploads ID (National ID, Driver's License, or Passport)
3. Uploads vehicle documents
4. Admin reviews and approves
5. Driver becomes "verified" and can go online

---

## 3. Mobile Money Integration

### MTN Mobile Money API

**Contact MTN Liberia:**
- Email: business.momo@mtn.com
- Phone: +231 77 000 0000
- Visit: MTN Liberia HQ in Monrovia

**API Integration Steps:**
1. Apply for MoMo API access
2. Get API credentials (Client ID, Secret)
3. Implement sandbox testing
4. Move to production

**Sample API Call (Node.js):**
```typescript
const axios = require('axios');

async function initiateMTNTransfer(phoneNumber, amount, currency) {
  const response = await axios.post('https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay', {
    amount: amount,
    currency: currency,
    externalId: 'transaction_123',
    payer: {
      partyIdType: 'MSISDN',
      partyId: phoneNumber
    },
    payeeNote: 'NegoRide payment',
    payerMessage: 'Payment for ride'
  }, {
    headers: {
      'Authorization': `Bearer ${YOUR_ACCESS_TOKEN}`,
      'X-Reference-Id': generateReferenceId(),
      'X-Target-Environment': 'sandbox',
      'Ocp-Apim-Subscription-Key': YOUR_SUBSCRIPTION_KEY
    }
  });
  return response.data;
}
```

### Orange Money API

**Contact Orange Liberia:**
- Email: orange.money@orange.com.lr
- Visit: Orange Liberia HQ

**Similar integration process to MTN**

### Fallback: Manual Confirmation
**For MVP launch without full API integration:**

1. **In-App Payment Request:**
   - User selects "Pay with MTN Mobile Money"
   - App shows: "Send LRD 500 to 0777000000"
   - User completes transaction on phone
   - User enters transaction ID in app

2. **Verification:**
   - Admin checks MTN dashboard
   - Confirms payment
   - Ride status changes to "paid"

3. **This approach:**
   - No API integration needed initially
   - Manual verification (10-15 minutes)
   - Can automate later with APIs

---

## 4. Driver Recruitment Strategy

### Phase 1: First 50 Drivers (Weeks 1-4)

**Target: Commercial Taxi Drivers**
- Approach taxi stands in Monrovia
- Locations: Broad Street, Sinkor, Paynesville
- Offer: 0% commission for first 3 months
- Requirement: Valid license, vehicle registration

**Recruitment Script:**
```
"Hello, I'm with NegoRide, a new Liberian ride-hailing app.
Unlike other apps that take 20-25%, we only take 10% commission.
And for the first 3 months, you pay 0% commission.
You set your own prices and negotiate with passengers.
Sign up today and start earning more."
```

**Sign-Up Process:**
1. Driver fills form in app
2. Uploads: ID photo, vehicle photo, license photo
3. Admin verifies documents (24-48 hours)
4. Driver receives "verified" badge
5. Driver can go online and accept rides

**Incentives:**
- First 50 drivers: 0% commission for 3 months
- Sign-up bonus: LRD 5,000 after 20 rides
- Referral bonus: LRD 1,000 for each driver referred

### Phase 2: Next 50 Drivers (Weeks 5-8)

**Target: Motorcycle (Boda) Drivers**
- Popular in Liberia for quick trips
- Lower operating costs
- High demand in traffic

**Approach:**
- Visit motorcycle parks
- Partner with boda associations
- Offer same incentives

**Additional Requirement:**
- Motorcycle registration
- Helmet compliance check

### Phase 3: Kehkeh Drivers (Weeks 9-12)

**Target: Tuk-tuk Drivers**
- 3-wheelers popular in Liberia
- Good for short trips

### Recruitment Channels

**Offline:**
- Taxi stands and parks
- Motorcycle parks
- Local radio advertisements
- Community meetings
- Word of mouth

**Online:**
- Facebook groups (Liberian communities)
- WhatsApp groups
- Instagram ads
- TikTok videos showing driver earnings

**Partnerships:**
- Taxi driver associations
- Motorcycle rider groups
- Local transport unions

---

## 5. Marketing Strategy

### Pre-Launch (Weeks 1-4)

**Social Media Setup:**
- Facebook: @NegoRideLiberia
- Instagram: @negoride.lr
- TikTok: @negoride
- WhatsApp Business number

**Content Strategy:**
- **Problem Videos**: Show surge pricing frustration, then NegoRide solution
- **Driver Testimonials**: "I earn 30% more with NegoRide"
- **Rider Testimonials**: "I saved LRD 200 on my commute"
- **How-To Videos**: Step-by-step app usage
- **Comparison Videos**: NegoRide vs competitors

**Facebook Ads Targeting:**
- Location: Monrovia, Paynesville, Sinkor
- Age: 18-45
- Interests: Transportation, Taxi, Technology
- Budget: LRD 50,000/day ($300)

### Launch Week (Week 5)

**Launch Event:**
- Location: Central Monrovia (e.g., Unity Conference Center)
- Activities: Free rides for first 100 users
- Media: Invite journalists, radio stations
- Influencers: Partner with local celebrities

**Launch Offer:**
- First ride: 50% off (max LRD 250 discount)
- Referral: Both get LRD 100 when friend signs up
- First week: 5% commission for drivers (instead of 10%)

### Post-Launch (Weeks 6-12)

**Continuous Marketing:**
- Daily social media posts
- Weekly driver spotlight
- Monthly promotional campaigns
- Seasonal offers (rainy day discounts, holiday specials)

**Partnership Marketing:**
- **Shopping Malls**: Free parking for NegoRide drivers
- **Hotels**: Preferred ride-hailing partner
- **Universities**: Student discounts
- **Corporate**: Employee ride programs
- **Restaurants**: Delivery partnerships

**Referral Program:**
- Rider refers rider: Both get LRD 100
- Driver refers driver: Referrer gets LRD 1,000
- Driver refers rider: Driver gets LRD 200

**Community Engagement:**
- Sponsor local events
- Support community initiatives
- Driver training programs
- Safety workshops

---

## 6. Launch Plan

### Week 1-2: Soft Launch (Beta)
- **Target**: 20 drivers, 100 riders
- **Area**: Monrovia Central only
- **Goal**: Test systems, fix bugs
- **Feedback**: Collect user feedback

### Week 3-4: Controlled Expansion
- **Target**: 50 drivers, 500 riders
- **Area**: Add Sinkor and Paynesville
- **Goal**: Improve operations
- **Marketing**: Initial ads

### Week 5-8: Official Launch
- **Target**: 100 drivers, 2,000 riders
- **Area**: Full Monrovia metro
- **Goal**: Brand awareness
- **Marketing**: Full campaign

### Week 9-12: Expansion
- **Target**: 200 drivers, 5,000 riders
- **Area**: Add Congo Town, ELWA
- **Goal**: Market share growth
- **Marketing**: Continued campaign

### Month 4-6: County Expansion
- **Target**: 500 drivers, 10,000 riders
- **Area**: Expand to other counties
- **Goal**: Pan-Liberia presence
- **Marketing**: Regional campaigns

---

## 7. Legal & Compliance

### Business Registration
1. Register business with Liberia Business Registry
2. Get tax identification number (TIN)
3. Register with Ministry of Transport
4. Obtain operating license

### Insurance
- Commercial vehicle insurance for drivers
- Passenger insurance coverage
- Liability insurance
- Partnership with local insurance companies (e.g., Liberty Insurance)

### Data Protection
- Comply with Liberia data protection laws
- Secure user data
- Privacy policy
- Terms of service

### Central Bank of Liberia
- Register mobile money operations
- Comply with financial regulations
- AML/KYC procedures

---

## 8. Operational Setup

### Office
- Small office in Monrovia (can start with co-working space)
- 24/7 support line
- Driver verification center

### Team
**Month 1-3:**
- 1 Founder/CEO
- 1 Developer (can be contractor)
- 1 Operations Manager
- 2 Customer Support (part-time)

**Month 4-6:**
- Add Marketing Manager
- Add more support staff
- Add Driver recruitment team

### Technology Stack for Production
- **Hosting**: Vercel (free tier) or Railway ($5/month)
- **Database**: Firebase (free tier up to limits)
- **Authentication**: Firebase Auth (free)
- **SMS**: Twilio or Africa's Talking (for OTP)
- **Maps**: Google Maps API (free tier)
- **Push Notifications**: Firebase Cloud Messaging (free)

---

## 9. Cost Breakdown (First 6 Months)

### Development (Already Done: $0)
- Web app built
- Frontend complete

### Additional Development Needed
- Backend integration: $2,000 (freelancer)
- Mobile money API: $500 (setup fees)
- SMS integration: $200

### Marketing (6 months)
- Facebook/Instagram ads: $3,000
- Launch event: $1,000
- Promotional materials: $500
- Total: $4,500

### Operations (6 months)
- Office space: $1,200 (co-working)
- Team salaries: $15,000
- Driver incentives: $5,000
- Miscellaneous: $1,000
- Total: $22,200

### Legal & Compliance
- Business registration: $500
- Licenses: $1,000
- Insurance setup: $500
- Total: $2,000

### Technology (6 months)
- Hosting: $30
- SMS credits: $300
- Maps API: $200
- Total: $530

### **Total 6-Month Budget: ~$29,000**

**Can be reduced to ~$15,000 if:**
- Founder does development
- Lower marketing spend
- Co-founder instead of hired team
- Use free tools extensively

---

## 10. Timeline Summary

### Month 1
- Week 1: Backend setup (Firebase)
- Week 2: Authentication implementation
- Week 3: Driver verification system
- Week 4: First 20 driver sign-ups

### Month 2
- Week 5: Manual mobile money integration
- Week 6: Beta testing with 20 drivers
- Week 7: Bug fixes and improvements
- Week 8: Reach 50 drivers

### Month 3
- Week 9: Official launch preparation
- Week 10: Launch event
- Week 11: Marketing campaign
- Week 12: Reach 100 drivers, 2,000 riders

### Month 4-6
- Continuous expansion
- County rollout
- API integrations (if budget allows)
- Team growth

---

## 11. Immediate Next Steps (This Week)

1. **Set up Firebase Project** (2 hours)
   - Go to firebase.google.com
   - Create project
   - Enable Auth and Firestore

2. **Create Driver Sign-Up Form** (4 hours)
   - Add form to /driver page
   - Include document upload fields
   - Connect to Firebase

3. **Contact MTN/Orange** (1 day)
   - Request API access
   - Get sandbox credentials
   - Document requirements

4. **Start Driver Recruitment** (ongoing)
   - Visit 5 taxi stands
   - Talk to 50 drivers
   - Get 20 sign-ups

5. **Set up Social Media** (2 hours)
   - Create accounts
   - Design profile
   - Post teaser content

6. **Plan Launch Event** (ongoing)
   - Book venue
   - Invite media
   - Prepare materials

---

## 12. Resources & Contacts

### Technology
- Firebase: https://firebase.google.com
- Supabase: https://supabase.com
- Vercel: https://vercel.com
- Twilio: https://twilio.com

### Mobile Money
- MTN Liberia: Contact business@momo.mtn.com
- Orange Liberia: Contact orange.money@orange.com.lr
- Central Bank of Liberia: https://www.cbl.org.lr

### Business Registration
- Liberia Business Registry: https://lbr.gov.lr
- Ministry of Transport: Contact for transport licenses

### Marketing
- Facebook Business: https://business.facebook.com
- Instagram Business: https://business.instagram.com
- Local radio stations for ads

---

## 13. Success Metrics

### Month 1-3 Targets
- **Drivers**: 100
- **Active Riders**: 2,000
- **Rides per Day**: 50
- **Revenue**: $1,800/month

### Month 4-6 Targets
- **Drivers**: 300
- **Active Riders**: 8,000
- **Rides per Day**: 200
- **Revenue**: $7,200/month

### Month 7-12 Targets
- **Drivers**: 1,000
- **Active Riders**: 30,000
- **Rides per Day**: 1,000
- **Revenue**: $36,000/month

---

## 14. Risks & Mitigation

### Risk: Slow Driver Adoption
**Mitigation:**
- 0% commission for first 3 months
- Sign-up bonuses
- Personal outreach
- Partner with driver associations

### Risk: Low Rider Demand
**Mitigation:**
- Launch promotions (first ride 50% off)
- Referral program
- Aggressive marketing
- Superior pricing model

### Risk: Payment Integration Delays
**Mitigation:**
- Start with manual confirmation
- Automate when APIs ready
- Multiple payment options (cash, MoMo)

### Risk: Safety Incidents
**Mitigation:**
- Strict driver verification
- SOS button in app
- Insurance coverage
- 24/7 support

### Risk: Competition Response
**Mitigation:**
- First-mover advantage
- Unique fare negotiation model
- Rapid expansion
- Brand loyalty building

---

## 15. Getting Help

### Technical Help
- Firebase documentation: https://firebase.google.com/docs
- Stack Overflow for coding questions
- Upwork/Fiverr for freelance developers

### Business Help
- Liberia Chamber of Commerce
- Small Business Development Center
- Local business incubators

### Funding
- Local banks (loan options)
- Angel investors (use PITCH.md)
- Crowdfunding (if appropriate)
- Government grants for tech startups

---

**Ready to launch NegoRide and transform Liberia's transportation landscape!**
