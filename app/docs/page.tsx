"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Book, 
  Code, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Terminal, 
  Copy, 
  Check, 
  ChevronRight,
  Rocket,
  Settings,
  Eye,
  Users,
  Clock,
  MapPin,
  Smartphone,
  ArrowRight,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DocsPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://your-domain.com';

  const navigation = [
    { name: 'Introduction', href: '#introduction', icon: Book },
    { name: 'Quick Start', href: '#quickstart', icon: Rocket },
    { name: 'Installation', href: '#installation', icon: Terminal },
    { name: 'Configuration', href: '#configuration', icon: Settings },
    { name: 'Features', href: '#features', icon: Zap },
    { name: 'API Reference', href: '#api', icon: Code },
    { name: 'Dashboard', href: '#dashboard', icon: BarChart3 },
    { name: 'Privacy', href: '#privacy', icon: Shield },
  ];

  const CodeBlock = ({ code, language = 'html', id }: { code: string; language?: string; id: string }) => (
    <div className="relative group">
      <pre className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 overflow-x-auto text-sm">
        <code className="text-neutral-300 font-mono">{code}</code>
      </pre>
      <button
        onClick={() => handleCopy(code, id)}
        className="absolute top-3 right-3 p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied === id ? (
          <Check className="h-4 w-4 text-emerald-400" />
        ) : (
          <Copy className="h-4 w-4 text-neutral-400" />
        )}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-8">
          {/* Sidebar Navigation */}
          <aside className={`${mobileNavOpen ? 'fixed inset-0 z-40 bg-neutral-950 p-6 pt-20' : 'hidden'} md:block md:relative md:p-0 md:w-64 flex-shrink-0`}>
            <nav className="sticky top-24 space-y-1">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                Getting Started
              </p>
              {navigation.slice(0, 4).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </a>
              ))}
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-6 mb-4">
                Reference
              </p>
              {navigation.slice(4).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-4">
                <Zap className="h-3 w-3" />
                v1.0.0
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                Trackly Documentation
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl">
                Learn how to integrate Trackly's lightweight, privacy-focused analytics 
                into your website in under 5 minutes.
              </p>
            </div>

            {/* Introduction */}
            <section id="introduction" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Book className="h-6 w-6 text-emerald-500" />
                Introduction
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Trackly is a modern, privacy-first website analytics platform that helps you understand 
                  your visitors without compromising their privacy. Unlike traditional analytics tools, 
                  Trackly doesn't use cookies and is fully GDPR compliant out of the box.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                    <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                      <Zap className="h-5 w-5 text-emerald-500" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Lightweight</h3>
                    <p className="text-sm text-neutral-400">Under 2KB script size. Won't slow down your website.</p>
                  </div>
                  <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                      <Shield className="h-5 w-5 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Privacy-First</h3>
                    <p className="text-sm text-neutral-400">No cookies required. GDPR & CCPA compliant.</p>
                  </div>
                  <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                    <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                      <Clock className="h-5 w-5 text-purple-500" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Real-time</h3>
                    <p className="text-sm text-neutral-400">See your visitors as they happen, live on your dashboard.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Start */}
            <section id="quickstart" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Rocket className="h-6 w-6 text-emerald-500" />
                Quick Start
              </h2>
              <p className="text-neutral-400 mb-6">
                Get up and running with Trackly in just 3 simple steps.
              </p>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2">Create an Account</h3>
                    <p className="text-neutral-400 text-sm mb-3">
                      Sign up for a free Trackly account to get started.
                    </p>
                    <Link href="/signup">
                      <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                        Create Account <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2">Add Your Website</h3>
                    <p className="text-neutral-400 text-sm mb-3">
                      From your dashboard, click "Add Website" and enter your domain name.
                    </p>
                    <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/50">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-emerald-500" />
                        <code className="text-sm text-neutral-300">example.com</code>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2">Install the Script</h3>
                    <p className="text-neutral-400 text-sm mb-3">
                      Copy the tracking script and paste it into the <code className="text-emerald-400">&lt;head&gt;</code> section of your website.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Installation */}
            <section id="installation" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="h-6 w-6 text-emerald-500" />
                Installation
              </h2>
              <p className="text-neutral-400 mb-6">
                Add the Trackly script to your website. Works with any framework or static site.
              </p>

              {/* Basic Installation */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">Basic Installation</h3>
                <p className="text-neutral-400 text-sm mb-4">
                  Add this script tag to your website's <code className="text-emerald-400 bg-neutral-900 px-1.5 py-0.5 rounded">&lt;head&gt;</code> section:
                </p>
                <CodeBlock 
                  id="basic-script"
                  code={`<script
  defer
  data-website-id="YOUR_WEBSITE_ID"
  data-domain="${baseUrl}"
  src="${baseUrl}/analytics.js">
</script>`}
                />
                <div className="mt-4 p-4 rounded-lg border border-amber-500/20 bg-amber-500/5">
                  <p className="text-sm text-amber-400">
                    <strong>Important:</strong> Replace <code>YOUR_WEBSITE_ID</code> with the ID from your dashboard.
                  </p>
                </div>
              </div>

              {/* Framework-specific */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white">Framework Examples</h3>

                {/* Next.js */}
                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded bg-white flex items-center justify-center">
                      <span className="text-black font-bold text-xs">N</span>
                    </div>
                    <h4 className="font-semibold text-white">Next.js</h4>
                  </div>
                  <p className="text-sm text-neutral-400 mb-3">
                    Add the script to your <code className="text-emerald-400">app/layout.tsx</code> or use the Script component:
                  </p>
                  <CodeBlock 
                    id="nextjs-script"
                    language="tsx"
                    code={`import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          defer
          data-website-id="YOUR_WEBSITE_ID"
          data-domain="${baseUrl}"
          src="${baseUrl}/analytics.js"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}`}
                  />
                </div>

                {/* React */}
                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded bg-cyan-500 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">R</span>
                    </div>
                    <h4 className="font-semibold text-white">React (Vite / CRA)</h4>
                  </div>
                  <p className="text-sm text-neutral-400 mb-3">
                    Add the script to your <code className="text-emerald-400">index.html</code>:
                  </p>
                  <CodeBlock 
                    id="react-script"
                    code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script
      defer
      data-website-id="YOUR_WEBSITE_ID"
      data-domain="${baseUrl}"
      src="${baseUrl}/analytics.js">
    </script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`}
                  />
                </div>

                {/* HTML */}
                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded bg-orange-500 flex items-center justify-center">
                      <Code className="h-3 w-3 text-white" />
                    </div>
                    <h4 className="font-semibold text-white">Static HTML</h4>
                  </div>
                  <p className="text-sm text-neutral-400 mb-3">
                    Simply paste the script before the closing <code className="text-emerald-400">&lt;/head&gt;</code> tag:
                  </p>
                  <CodeBlock 
                    id="html-script"
                    code={`<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
    <script
      defer
      data-website-id="YOUR_WEBSITE_ID"
      data-domain="${baseUrl}"
      src="${baseUrl}/analytics.js">
    </script>
  </head>
  <body>
    <!-- Your content -->
  </body>
</html>`}
                  />
                </div>
              </div>
            </section>

            {/* Configuration */}
            <section id="configuration" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Settings className="h-6 w-6 text-emerald-500" />
                Configuration
              </h2>
              <p className="text-neutral-400 mb-6">
                Customize Trackly's behavior using data attributes on the script tag.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-800">
                      <th className="text-left py-3 px-4 text-neutral-300 font-semibold">Attribute</th>
                      <th className="text-left py-3 px-4 text-neutral-300 font-semibold">Required</th>
                      <th className="text-left py-3 px-4 text-neutral-300 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800">
                    <tr>
                      <td className="py-3 px-4">
                        <code className="text-emerald-400 bg-neutral-900 px-1.5 py-0.5 rounded text-xs">data-website-id</code>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-emerald-400 text-xs font-medium">Yes</span>
                      </td>
                      <td className="py-3 px-4 text-neutral-400">Your unique website ID from the dashboard</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <code className="text-emerald-400 bg-neutral-900 px-1.5 py-0.5 rounded text-xs">data-domain</code>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-emerald-400 text-xs font-medium">Yes</span>
                      </td>
                      <td className="py-3 px-4 text-neutral-400">The Trackly server URL for data collection</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <code className="text-emerald-400 bg-neutral-900 px-1.5 py-0.5 rounded text-xs">defer</code>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-neutral-500 text-xs font-medium">Recommended</span>
                      </td>
                      <td className="py-3 px-4 text-neutral-400">Loads script without blocking page render</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Features */}
            <section id="features" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6 text-emerald-500" />
                Features
              </h2>
              <p className="text-neutral-400 mb-8">
                Everything Trackly tracks automatically once installed.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Unique Visitors</h3>
                      <p className="text-sm text-neutral-400">Track unique visitors using privacy-friendly session IDs stored in localStorage.</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Eye className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Page Views</h3>
                      <p className="text-sm text-neutral-400">Automatic page view tracking for every page your visitors view.</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Active Time</h3>
                      <p className="text-sm text-neutral-400">Measure how long visitors actively spend on your website.</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Geolocation</h3>
                      <p className="text-sm text-neutral-400">See where your visitors are from - country, region, and city.</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                      <Smartphone className="h-5 w-5 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Device Info</h3>
                      <p className="text-sm text-neutral-400">Track device type, operating system, and browser information.</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="h-5 w-5 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Referrer Tracking</h3>
                      <p className="text-sm text-neutral-400">Know where your traffic comes from - search, social, or direct.</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">UTM Campaigns</h3>
                      <p className="text-sm text-neutral-400">Track UTM parameters for marketing campaign attribution.</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Entry & Exit URLs</h3>
                      <p className="text-sm text-neutral-400">See which pages visitors land on and where they leave.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* API Reference */}
            <section id="api" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Code className="h-6 w-6 text-emerald-500" />
                API Reference
              </h2>
              <p className="text-neutral-400 mb-6">
                The Trackly script automatically sends data to our API. Here's what gets tracked.
              </p>

              <div className="space-y-6">
                {/* Entry Event */}
                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 rounded text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400">
                      ENTRY
                    </span>
                    <span className="text-neutral-300 font-medium">Page View Event</span>
                  </div>
                  <p className="text-sm text-neutral-400 mb-4">
                    Triggered when a visitor lands on any page.
                  </p>
                  <CodeBlock 
                    id="entry-event"
                    language="json"
                    code={`{
  "type": "entry",
  "websiteId": "abc123xyz",
  "visitorId": "unique-session-id",
  "url": "https://example.com/page",
  "referrer": "https://google.com",
  "entryTime": 1737158400,
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "spring-sale"
}`}
                  />
                </div>

                {/* Exit Event */}
                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 rounded text-xs font-mono font-bold bg-red-500/20 text-red-400">
                      EXIT
                    </span>
                    <span className="text-neutral-300 font-medium">Session End Event</span>
                  </div>
                  <p className="text-sm text-neutral-400 mb-4">
                    Triggered when a visitor leaves the page or closes the tab.
                  </p>
                  <CodeBlock 
                    id="exit-event"
                    language="json"
                    code={`{
  "type": "exit",
  "websiteId": "abc123xyz",
  "visitorId": "unique-session-id",
  "exitTime": 1737158520,
  "totalActiveTime": 120,
  "exitUrl": "https://example.com/checkout"
}`}
                  />
                </div>
              </div>
            </section>

            {/* Dashboard */}
            <section id="dashboard" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-emerald-500" />
                Dashboard
              </h2>
              <p className="text-neutral-400 mb-6">
                Your analytics dashboard provides real-time insights into your website traffic.
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                  <h3 className="font-semibold text-white mb-2">Overview Metrics</h3>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      Total unique visitors for selected date range
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      Total page views across all pages
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      Average and total active time on site
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      Live visitor count in real-time
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50">
                  <h3 className="font-semibold text-white mb-2">Analytics Views</h3>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      <strong className="text-neutral-300">Hourly:</strong> View traffic patterns hour by hour
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      <strong className="text-neutral-300">Daily:</strong> Compare traffic across days
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      <strong className="text-neutral-300">Date Range:</strong> Select custom date ranges for analysis
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Privacy */}
            <section id="privacy" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-emerald-500" />
                Privacy & Compliance
              </h2>
              <p className="text-neutral-400 mb-6">
                Trackly is designed with privacy at its core. Here's how we protect your visitors.
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                  <h3 className="font-semibold text-emerald-400 mb-3">🍪 No Cookies Required</h3>
                  <p className="text-sm text-neutral-400">
                    Trackly uses localStorage for session management instead of cookies. This means 
                    you don't need a cookie consent banner for Trackly analytics.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5">
                  <h3 className="font-semibold text-blue-400 mb-3">🇪🇺 GDPR Compliant</h3>
                  <p className="text-sm text-neutral-400">
                    No personal data is collected. Visitor IDs are anonymized and can't be used 
                    to identify individuals. IP addresses are only used for geolocation and never stored in full.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-purple-500/20 bg-purple-500/5">
                  <h3 className="font-semibold text-purple-400 mb-3">🔒 Data Security</h3>
                  <p className="text-sm text-neutral-400">
                    All data is transmitted over HTTPS and stored securely. We never sell or share 
                    your analytics data with third parties.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-16">
              <div className="p-8 rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 text-center">
                <h2 className="text-2xl font-bold text-white mb-3">Ready to get started?</h2>
                <p className="text-neutral-400 mb-6 max-w-md mx-auto">
                  Start tracking your website analytics in minutes. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/signup">
                    <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                      Create Free Account <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800">
                      View Dashboard
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-neutral-800 pt-8 pb-12">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                    <BarChart3 className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-neutral-400 text-sm">Trackly © 2026</span>
                </div>
                <div className="flex items-center gap-6">
                  <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
                    Home
                  </Link>
                  <Link href="/dashboard" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
                    Dashboard
                  </Link>
                  <Link href="/login" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
                    Login
                  </Link>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
