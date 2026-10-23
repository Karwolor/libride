# NegoRide - Deployment Guide

## 🚀 Option 1: Deploy to Vercel (Recommended - Free)

### Step 1: Create GitHub Account (If you don't have one)
- Go to https://github.com
- Sign up for free account
- Verify your email

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `negoride`
3. Description: "Liberia's fair ride-hailing app with fare negotiation"
4. Make it **Public** (easier to share)
5. Click "Create repository"

### Step 3: Push Your Code to GitHub

Open terminal/command prompt in the negoride folder:

```bash
cd "C:\Users\karda\Downloads\LIB Drive\negoride"
git init
git add .
git commit -m "Initial commit - NegoRide Liberia"
git branch -M main
```

Then connect to your GitHub repository (replace YOUR_USERNAME with your actual GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/negoride.git
git push -u origin main
```

**If it asks for GitHub username and password:**
- Username: Your GitHub username
- Password: Use a "Personal Access Token" (not your password)
  - Go to GitHub Settings → Developer Settings → Personal Access Tokens
  - Generate new token
  - Use that as password

### Step 4: Deploy to Vercel

1. Go to https://vercel.com
2. Click "Sign Up"
3. Sign up with GitHub (easiest)
4. Click "Add New Project"
5. You'll see your `negoride` repository - click "Import"
6. Click "Deploy"
7. Wait 2-3 minutes
8. 🎉 Your app is live!

### Step 5: Your Live URL

Vercel will give you a URL like:
- `https://negoride.vercel.app`
- or `https://negoride-[random].vercel.app`

**Copy this URL** - this is your live app!

---

## 🌐 Option 2: Deploy with Vercel CLI (No GitHub needed)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
cd "C:\Users\karda\Downloads\LIB Drive\negoride"
vercel
```

Follow the prompts:
- ? Set up and deploy? → Yes
- ? Which scope? → Your username
- ? Link to existing project? → No
- ? What's your project's name? → negoride
- ? In which directory is your code located? → ./
- ? Want to modify these settings? → No

### Step 4: Your App is Live!
Vercel will show you a URL. Your app is deployed!

---

## 🔄 How to Update Your App

### After Making Changes:

```bash
git add .
git commit -m "Your message about changes"
git push
```

**Vercel automatically deploys your changes!** No extra steps needed.

---

## 📱 Custom Domain (Optional)

If you want your own domain like `negoride.lr`:

1. Buy domain from Namecheap, GoDaddy, or other registrar
2. In Vercel dashboard → Settings → Domains
3. Add your domain
4. Update DNS settings as Vercel instructs
5. Wait 24-48 hours for propagation

**Cost**: ~$10-15/year for domain

---

## 💰 Cost Summary

### Vercel (Hobby Plan - Free)
- ✅ Unlimited deployments
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ 100GB bandwidth per month
- ✅ Perfect for NegoRide

### Firebase (Free Tier)
- ✅ Authentication
- ✅ Firestore database
- ✅ Real-time database
- ✅ Up to certain limits (enough for MVP)

### Total Cost: $0/month for MVP!

---

## 🎯 Recommended Deployment Timeline

### Today:
- [ ] Keep running locally at http://localhost:3000
- [ ] Use for testing and driver recruitment

### This Week:
- [ ] Deploy to Vercel (get live URL)
- [ ] Share Vercel URL with drivers
- [ ] Use in marketing materials

### After Launch:
- [ ] Set up custom domain (negoride.lr)
- [ ] Add analytics (Vercel Analytics)
- [ ] Set up error monitoring

---

## 📞 Help with Deployment

### If GitHub Push Fails:
- Make sure you created the repository on GitHub first
- Check your GitHub username is correct
- Use Personal Access Token for password (not GitHub password)

### If Vercel Deploy Fails:
- Check that package.json has correct scripts
- Make sure all dependencies are installed (`npm install`)
- Check Vercel deployment logs for errors

### Quick Links:
- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
- Next.js Deployment: https://nextjs.org/docs/deployment

---

## ✅ Deployment Checklist

- [ ] GitHub account created
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project deployed to Vercel
- [ ] Live URL copied and saved
- [ ] Test live URL in browser
- [ ] Share URL with first drivers

---

**Your app can be live in under 10 minutes!** 🚀
