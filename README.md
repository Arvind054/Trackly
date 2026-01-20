# Trackly

A modern, privacy-focused web analytics platform built for developers and teams. Track website visitors in real-time without cookies, fully GDPR-compliant.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Drizzle](https://img.shields.io/badge/Drizzle-ORM-green?style=flat-square)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)

---

## 🎯 What is Trackly?

Trackly is a lightweight, open-source web analytics platform that helps you understand your users without compromising their privacy. Unlike traditional analytics tools that rely on cookies and invasive tracking, Trackly provides meaningful insights while respecting user privacy.

### Key Features

- **🔴 Real-time Analytics** - See live visitors on your site as they browse
- **🍪 Cookie-free Tracking** - No cookies, no consent banners needed
- **🛡️ GDPR Compliant** - Privacy-first approach, no personal data collection
- **📊 Beautiful Dashboard** - Clean, modern UI to visualize your data
- **⚡ Lightweight Script** - Tiny tracking script (~2KB) that won't slow your site
- **🌍 Geo-location Insights** - See where your visitors come from (country, region, city)
- **📱 Device Analytics** - Track browsers, operating systems, and devices
- **🔗 Referrer Tracking** - Know where your traffic originates
- **📈 UTM Campaign Support** - Track marketing campaigns with UTM parameters
- **⏱️ Session Duration** - Measure how long visitors spend on your site
--

# 🧑‍💻For Users
You can Use the Trackly from : https://trackly-beta.vercel.app
- Free For All
- Easy Google Authntication

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (we recommend [Neon](https://neon.tech) for serverless)
- Google OAuth credentials (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/trackly.git
   cd trackly
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL=your_postgresql_connection_string
   
   # Authentication (Better Auth)
   BETTER_AUTH_SECRET=your_secret_key_here
   BETTER_AUTH_URL=http://localhost:3000
   
   # Google OAuth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   
   # App URL
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Push database schema**
   ```bash
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📖 How to Use

### 1. Create an Account

Sign up using your Google account or email to access the dashboard.

### 2. Add Your Website

1. Navigate to the Dashboard
2. Click "Add Website"
3. Enter your website domain and timezone
4. Copy the generated tracking script

### 3. Install the Tracking Script

Add the tracking script to your website's `<head>` section:

```html
<script
  defer
  data-website-id="your-website-id"
  data-domain="https://your-domain.com"
  src="https://your-trackly-instance.com/analytics.js">
</script>
```

### 4. View Your Analytics

Once the script is installed, you'll start seeing data in your dashboard:

- **Visitors** - Unique visitors count
- **Page Views** - Total page views
- **Live Users** - Real-time active users
- **Active Time** - Total and average session duration
- **Traffic Sources** - Referrers and UTM campaigns
- **Geography** - Visitor locations on a map
- **Devices** - Browser, OS, and device breakdown

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [Next.js 15](https://nextjs.org) (App Router) |
| **Language** | [TypeScript](https://typescriptlang.org) |
| **Database** | [PostgreSQL](https://postgresql.org) with [Neon](https://neon.tech) |
| **ORM** | [Drizzle ORM](https://orm.drizzle.team) |
| **Authentication** | [Better Auth](https://better-auth.com) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://radix-ui.com) |
| **Charts** | [Recharts](https://recharts.org) |
| **HTTP Client** | [Axios](https://axios-http.com) |
| **Date Handling** | [date-fns](https://date-fns.org) |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Deployment** | [Vercel](https://vercel.com) |

---

## ⚙️ How It Works

### Architecture Overview

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Your Website  │────▶│  Trackly API     │────▶│   PostgreSQL    │
│  (analytics.js) │     │  (Next.js API)   │     │   (Neon DB)     │
└─────────────────┘     └──────────────────┘     └─────────────────┘
                               │
                               ▼
                        ┌──────────────────┐
                        │    Dashboard     │
                        │   (React/Next)   │
                        └──────────────────┘
```

### Tracking Flow

1. **Page Entry**: When a visitor lands on your site, the `analytics.js` script:
   - Generates a unique visitor ID (stored in localStorage, not cookies)
   - Captures entry time, referrer, URL, and UTM parameters
   - Sends a POST request to `/api/track` with visitor data

2. **Server Processing**: The tracking API endpoint:
   - Parses the user-agent for device/browser/OS info
   - Fetches geo-location data from the visitor's IP
   - Stores the pageview in the `pageViews` table

3. **Live Tracking**: While browsing:
   - The script sends heartbeat pings every 10 seconds to `/api/live`
   - This enables real-time "live users" count on your dashboard

4. **Page Exit**: When the visitor leaves:
   - The `beforeunload` event triggers an exit tracking call
   - Records exit time and total active time spent
   - Updates the session record in the database

### Database Schema

The main tables include:

- **`user`** - User accounts (Better Auth managed)
- **`session`** - Authentication sessions
- **`websites`** - Registered websites for tracking
- **`pageViews`** - Individual page view events with full analytics data
- **`liveUser`** - Currently active visitors (updated in real-time)

### Privacy-First Design

- **No cookies** - Visitor IDs stored in localStorage only
- **No fingerprinting** - No canvas, WebGL, or other fingerprinting techniques
- **IP anonymization** - IP addresses used only for geo-lookup, then discarded
- **Session isolation** - 12-hour session windows, then new visitor ID generated
- **Minimal data** - Only essential analytics data collected

---

## 📂 Project Structure

```
trackly/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── track/         # Pageview tracking endpoint
│   │   ├── live/          # Live user heartbeat endpoint
│   │   ├── website/       # Website CRUD operations
│   │   └── auth/          # Better Auth handlers
│   ├── dashboard/         # Dashboard pages
│   ├── login/             # Authentication pages
│   └── signup/
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Feature components
├── lib/                   # Utilities and configurations
│   ├── auth.ts           # Better Auth setup
│   └── utils.ts          # Helper functions
├── src/DB/               # Database
│   ├── index.ts          # Drizzle client
│   └── schema.ts         # Database schema
├── public/
│   └── analytics.js      # Client tracking script
└── drizzle.config.ts     # Drizzle Kit configuration
```

---

## 🧪 Development

```bash
# Run development server
npm run dev

# Run linting
npm run lint

# Push schema changes to database
npm run db:push

# Open Drizzle Studio (database GUI)
npm run db:studio

# Build for production
npm run build

# Start production server
npm run start
```

---

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The app is optimized for Vercel's Edge Network with serverless functions.

---

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

---

## 🤝 Contributing

-Contributions are welcome! Please feel free to submit a Pull Request.
-For any queries reach me out at `arvindchoudhary054@gmail.com`

---

<p align="center">
  Built with ❤️ By Arvind Choudhary
</p>

