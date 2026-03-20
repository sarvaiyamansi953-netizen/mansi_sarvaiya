# Shopify AI Marketing Intelligence Platform

🎯 **A Production-Ready Full-Stack SaaS Web Application**

This platform replicates core features of Shopify using Shopify APIs and extends it with advanced AI-driven marketing analytics.

## 🚀 Quick Start (Local Development)

### Prerequisites

- Node.js (v18+)
- MongoDB (Running locally or MongoDB Atlas)

### 1. Backend Setup

```bash
cd backend
npm install
# Copy .env.example to .env and fill in MONGODB_URI
npm run dev
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to access the platform.

### 🧪 Demo Mode

The platform includes a built-in Demo Mode. You can log in using:
- **Admin Demo**: `admin@demo.com` / `demo123`
- **User Demo**: `user@demo.com` / `demo123`

Wait a few seconds for the demo data to seed on your first login!

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS, Recharts, Framer Motion, Lucide Icons.
- **Backend**: Node.js, Express, Mongoose (MongoDB), JWT, OpenAI API, Shopify API (Official Node library).
- **Security**: HMAC Webhook Verification, JWT RBAC, Raw-Body payload handling.

## 📊 Core Features

- **Advanced Intelligence**: 7-day AI revenue forecasting, ROAS trends, and CLV cohorts.
- **Creative Fatigue Detection**: Automated SKU-level efficiency monitoring.
- **SaaS Super Admin**: Global management dashboard for platform oversight.
- **Real-time Synchronization**: Secure Shopify webhooks with HMAC verification.
- **Production Asset Suite**: HTML email templates, automated setup scripts, and localized UI.
- **Role-Based Access**: Secure JWT-based auth for Admins and Standard users.

## 🔐 Deployment

- **Backend**: Deploy to Render, Railway, or Vercel (Serverless).
- **Frontend**: Deploy to Vercel or Netlify.
- **Shopify**: Register a Shopify Partner app and update the `SHOPIFY_API_KEY` and `SHOPIFY_API_SECRET` in `.env`.
