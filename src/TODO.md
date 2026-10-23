# NegoRide - Immediate Action Items

## ✅ Check off items as you complete them

---

## 🔧 TECHNICAL SETUP (Do This First)

### Firebase Backend Setup
- [ ] Go to https://firebase.google.com and create account
- [ ] Create new project named "negoride"
- [ ] Enable Authentication (Phone Auth)
- [ ] Enable Firestore Database
- [ ] Copy your Firebase config keys
- [ ] Open `src/lib/firebase.ts` and replace placeholder values with your actual config
- [ ] Test that Firebase connection works

### Test the App
- [ ] Visit http://localhost:3000 - verify landing page loads
- [ ] Click "Book a Ride" - test booking flow
- [ ] Click "Become a Driver" - test driver signup form
- [ ] Click "Delivery" - test delivery service
- [ ] Make sure all pages work correctly

---

## 📞 MOBILE MONEY INTEGRATION

### Contact MTN Mobile Money
- [ ] Email: business.momo@mtn.com
- [ ] Request API access for NegoRide
- [ ] Ask for sandbox/test credentials
- [ ] Ask about integration timeline
- [ ] Save their response

### Contact Orange Money
- [ ] Email: orange.money@orange.com.lr
- [ ] Request API access for NegoRide
- [ ] Ask for sandbox/test credentials
- [ ] Ask about integration timeline
- [ ] Save their response

### Set Up Manual Payment (Backup Plan)
- [ ] If APIs take time, implement manual confirmation:
  - User pays via *156# (MTN) or *144# (Orange)
  - User enters transaction ID in app
  - You verify in admin dashboard
  - Mark ride as paid

---

## 🚗 DRIVER RECRUITMENT (Priority #1)

### Day 1: Visit Taxi Stands
- [ ] Broad Street (near Ministry of Finance) - Talk to 10 drivers
- [ ] Sinkor (near UN Drive) - Talk to 10 drivers
- [ ] Paynesville (Red Light market) - Talk to 10 drivers
- [ ] ELWA Junction - Talk to 10 drivers

### Driver Recruitment Script (Use This)
```
"Hello, I'm with NegoRide, a new Liberian ride-hailing app.
Unlike other apps that take 20-25%, we only take 10% commission.
And for the first 3 months, you pay 0% commission.
You set your own prices and negotiate with passengers.
Sign up today at negoride.lr/driver-signup"
```

### Help Drivers Sign Up
- [ ] Use your phone/laptop to help drivers fill the form
- [ ] Take photos of their documents (ID, license, vehicle)
- [ ] Enter data for them if they don't have smartphones
- [ ] Collect their phone numbers for follow-up
- [ ] Give them your contact info for questions

### Target: Get 20 Sign-ups This Week
- [ ] Driver #1 signed up: Name _______________ Phone _______________
- [ ] Driver #2 signed up: Name _______________ Phone _______________
- [ ] Driver #3 signed up: Name _______________ Phone _______________
- [ ] Driver #4 signed up: Name _______________ Phone _______________
- [ ] Driver #5 signed up: Name _______________ Phone _______________
- [ ] Driver #6 signed up: Name _______________ Phone _______________
- [ ] Driver #7 signed up: Name _______________ Phone _______________
- [ ] Driver #8 signed up: Name _______________ Phone _______________
- [ ] Driver #9 signed up: Name _______________ Phone _______________
- [ ] Driver #10 signed up: Name _______________ Phone _______________
- [ ] Driver #11 signed up: Name _______________ Phone _______________
- [ ] Driver #12 signed up: Name _______________ Phone _______________
- [ ] Driver #13 signed up: Name _______________ Phone _______________
- [ ] Driver #14 signed up: Name _______________ Phone _______________
- [ ] Driver #15 signed up: Name _______________ Phone _______________
- [ ] Driver #16 signed up: Name _______________ Phone _______________
- [ ] Driver #17 signed up: Name _______________ Phone _______________
- [ ] Driver #18 signed up: Name _______________ Phone _______________
- [ ] Driver #19 signed up: Name _______________ Phone _______________
- [ ] Driver #20 signed up: Name _______________ Phone _______________

### Incentives to Offer Drivers
- [ ] First 50 drivers: 0% commission for first 3 months
- [ ] Sign-up bonus: LRD 5,000 after completing 20 rides
- [ ] Referral bonus: LRD 1,000 for each driver they refer

---

## 📱 SOCIAL MEDIA SETUP

### Create Accounts
- [ ] Facebook page: "NegoRide Liberia"
- [ ] Instagram account: @negoride.lr
- [ ] WhatsApp Business account
- [ ] Create simple logo (use Canva - green text "NegoRide")

### First Posts to Create
- [ ] Post 1: "Coming Soon - NegoRide, Liberia's Fair Ride-Hailing App"
- [ ] Post 2: "Drivers Wanted - 0% Commission for First 3 Months!"
- [ ] Post 3: Short video explaining fare negotiation
- [ ] Post 4: "Your Ride, Your Price - No Surge Pricing"

### Join Local Groups
- [ ] Join Facebook group: "Monrovia Community"
- [ ] Join Facebook group: "Liberia Business Network"
- [ ] Join relevant WhatsApp groups
- [ ] Post about NegoRide in each group
- [ ] Share the app link: http://localhost:3000

---

## ✅ DRIVER VERIFICATION

### Review Applications
- [ ] Check ID photos for each driver
- [ ] Check driver's license photos
- [ ] Check vehicle photos and license plates
- [ ] Call each driver to confirm details
- [ ] Mark as "verified" in system

### Verification Checklist (For Each Driver)
- [ ] Driver #1: ID valid ____ License valid ____ Vehicle registered ____
- [ ] Driver #2: ID valid ____ License valid ____ Vehicle registered ____
- [ ] Driver #3: ID valid ____ License valid ____ Vehicle registered ____
- [ ] Driver #4: ID valid ____ License valid ____ Vehicle registered ____
- [ ] Driver #5: ID valid ____ License valid ____ Vehicle registered ____
- [ ] Driver #6: ID valid ____ License valid ____ Vehicle registered ____
- [ ] Driver #7: ID valid ____ License valid ____ Vehicle registered ____
- [ ] Driver #8: ID valid ____ License valid ____ Vehicle registered ____
- [ ] Driver #9: ID valid ____ License valid ____ Vehicle registered ____
- [ ] Driver #10: ID valid ____ License valid ____ Vehicle registered ____

---

## 🧪 BETA TESTING

### Test with Real Drivers
- [ ] Ask 5 verified drivers to go online in the app
- [ ] Have friends/family request test rides
- [ ] Test the full booking flow
- [ ] Test fare negotiation
- [ ] Test payment process (manual if API not ready)
- [ ] Document any bugs or issues found
- [ ] Fix critical bugs immediately

---

## 💰 BUDGET TRACKING

### Initial Budget: LRD 100,000 ($600)

Track your spending:
- [ ] Data/internet: Spent LRD _______
- [ ] Transport to visit drivers: Spent LRD _______
- [ ] Facebook ads: Spent LRD _______
- [ ] Driver incentives paid: Spent LRD _______
- [ ] Other expenses: Spent LRD _______
- [ ] Total spent: LRD _______ of LRD 100,000

---

## 📞 IMPORTANT CONTACTS TO MAKE

### Business Registration
- [ ] Contact Liberia Business Registry: lbr.gov.lr
- [ ] Ask about business registration process
- [ ] Ask about fees and timeline
- [ ] Schedule appointment if needed

### Transport License
- [ ] Contact Ministry of Transport
- [ ] Ask about ride-hailing regulations
- [ ] Ask about operating license requirements
- [ ] Document requirements

### Insurance
- [ ] Contact Liberty Insurance (or other local insurer)
- [ ] Ask about commercial vehicle insurance
- [ ] Ask about passenger liability insurance
- [ ] Get quotes

---

## 📊 WEEKLY GOALS

### Week 1 Goals
- [ ] Firebase backend set up
- [ ] 20 drivers signed up
- [ ] 10 drivers verified
- [ ] Social media accounts created
- [ ] First beta rides completed
- [ ] Mobile money providers contacted

### Week 2 Goals
- [ ] 50 drivers signed up
- [ ] 30 drivers verified
- [ ] 100 riders registered
- [ ] Facebook ads running
- [ ] Manual payment system working

### Week 3 Goals
- [ ] 100 drivers signed up
- [ ] 70 drivers verified
- [ ] 500 riders registered
- [ ] 50 rides per day
- [ ] Launch event planned

### Week 4 Goals (Launch Week)
- [ ] Official launch event
- [ ] 100 rides per day
- [ ] Media coverage
- [ ] Corporate partnerships started

---

## 🎯 DAILY CHECKLIST (Use Every Day)

### Morning
- [ ] Check for new driver sign-ups
- [ ] Verify pending driver applications
- [ ] Respond to messages/emails
- [ ] Post on social media

### Afternoon
- [ ] Visit taxi stands (recruitment)
- [ ] Follow up with interested drivers
- [ ] Test app functionality
- [ ] Monitor any issues

### Evening
- [ ] Review today's progress
- [ ] Plan tomorrow's tasks
- [ ] Update this checklist
- [ ] Send follow-up messages to drivers

---

## ⚠️ REMINDERS

### Don't Forget
- [ ] Always collect driver phone numbers
- [ ] Take photos of driver documents
- [ ] Follow up within 24 hours
- [ ] Be patient - drivers may be skeptical at first
- [ ] Offer to help them use the app
- [ ] Keep records of all sign-ups

### Common Mistakes to Avoid
- [ ] Don't wait for perfect backend - start with manual processes
- [ ] Don't spend too much on ads initially
- [ ] Don't ignore driver feedback
- [ ] Don't try to do everything - focus on core features first
- [ ] Don't forget to follow up with interested drivers

---

## 📞 EMERGENCY CONTACTS (Fill In)

- MTN Mobile Money: _______________
- Orange Money: _______________
- Your lawyer (for legal questions): _______________
- Your accountant (for financial questions): _______________
- Technical help contact: _______________

---

## 🗂️ FILE LOCATIONS (For Reference)

- App: http://localhost:3000
- Driver signup: http://localhost:3000/driver-signup
- Booking: http://localhost:3000/book
- Delivery: http://localhost:3000/delivery
- Firebase config: src/lib/firebase.ts
- README.md (overview)
- PITCH.md (investor pitch)
- IMPLEMENTATION_GUIDE.md (detailed guide)
- QUICK_START.md (week-by-week plan)

---

## ✅ WHEN ALL ABOVE IS DONE

After completing the checklist:
- [ ] Delete this TODO.md file
- [ ] Review progress in QUICK_START.md
- [ ] Plan next month's goals
- [ ] Celebrate your progress! 🎉

---

**Remember: The most important thing is getting real drivers signed up. Everything else can be improved later. Focus on recruitment first!**

**Good luck! 🚗💚**
