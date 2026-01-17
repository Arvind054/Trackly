import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Eye,
  Users,
  Activity,
  ArrowRight,
  Check,
  Star,
  Clock,
  Smartphone,
  Code,
  Play,
} from "lucide-react";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-hidden">

      {/* HERO */}
      <section className="relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[80px]" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[60px]" />
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 mb-8 backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-emerald-400">Live</span>
              </div>
              <span className="text-neutral-600">|</span>
              <span className="text-sm">
                Real-time tracking • No cookies • GDPR-ready
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Analytics that{" "}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-emerald-500 to-teal-400">
                  just work
                </span>
                <span className="absolute -inset-1 bg-emerald-500/20 blur-xl rounded-lg" />
              </span>
            </h1>

            <p className="mt-8 text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Understand your users in real-time. Track sessions, analyze trends, 
              and grow faster — all with a dashboard designed for modern teams.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
                >
                  Start Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 border-neutral-700 bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-600 backdrop-blur-sm"
                >
                  <Play className="mr-2 h-4 w-4" />
                  View Demo
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500" />
                <span>Free forever plan</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500" />
                <span>5-minute setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 lg:mt-24 max-w-6xl mx-auto">
            <div className="relative">
              {/* Glow effect behind dashboard */}
              <div className="absolute -inset-4 bg-linear-to-b from-emerald-500/20 via-emerald-500/5 to-transparent rounded-2xl blur-xl" />
              
              <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/90 backdrop-blur-xl overflow-hidden shadow-2xl">
                {/* Browser chrome */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-900">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-neutral-800 text-xs text-neutral-400">
                    <Globe className="h-3 w-3" />
                    trackly.app/dashboard
                  </div>
                  <div className="w-16" />
                </div>

                {/* Dashboard content */}
                <div className="p-6 lg:p-8">
                  {/* Stats row */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {[
                      { label: "Visitors Today", value: "12,847", change: "+18%", icon: Users },
                      { label: "Page Views", value: "48,293", change: "+24%", icon: Eye },
                      { label: "Avg. Duration", value: "3m 42s", change: "+8%", icon: Clock },
                      { label: "Live Now", value: "284", change: "", icon: Activity, live: true },
                    ].map((stat, i) => (
                      <div key={i} className="rounded-xl border border-neutral-800 bg-neutral-800/50 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-neutral-500">{stat.label}</span>
                          {stat.live ? (
                            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                              </span>
                              LIVE
                            </span>
                          ) : (
                            <stat.icon className="h-4 w-4 text-neutral-600" />
                          )}
                        </div>
                        <div className="flex items-end gap-2">
                          <span className="text-2xl font-bold text-white">{stat.value}</span>
                          {stat.change && (
                            <span className="text-xs text-emerald-400 mb-1">{stat.change}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid lg:grid-cols-3 gap-4">
                    {/* Chart area */}
                    <div className="lg:col-span-2 rounded-xl border border-neutral-800 bg-neutral-800/30 p-5">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm font-medium text-neutral-300">Visitors Overview</p>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 rounded text-xs bg-neutral-800 text-neutral-400">7 days</span>
                        </div>
                      </div>
                      {/* SVG Line Chart */}
                      <div className="relative">
                        <svg viewBox="0 0 400 120" className="w-full h-32" preserveAspectRatio="none">
                          {/* Grid lines */}
                          <line x1="40" y1="10" x2="390" y2="10" stroke="#404040" strokeWidth="0.5" strokeDasharray="4" />
                          <line x1="40" y1="40" x2="390" y2="40" stroke="#404040" strokeWidth="0.5" strokeDasharray="4" />
                          <line x1="40" y1="70" x2="390" y2="70" stroke="#404040" strokeWidth="0.5" strokeDasharray="4" />
                          <line x1="40" y1="100" x2="390" y2="100" stroke="#404040" strokeWidth="0.5" />
                          
                          {/* Y-axis labels */}
                          <text x="5" y="14" fill="#737373" fontSize="10">2k</text>
                          <text x="5" y="44" fill="#737373" fontSize="10">1.5k</text>
                          <text x="5" y="74" fill="#737373" fontSize="10">1k</text>
                          <text x="5" y="104" fill="#737373" fontSize="10">0</text>
                          
                          {/* Area fill */}
                          <path 
                            d="M 60 70 L 110 45 L 160 60 L 210 25 L 260 50 L 310 15 L 360 35 L 360 100 L 60 100 Z" 
                            fill="url(#areaGradient)" 
                          />
                          
                          {/* Line */}
                          <path 
                            d="M 60 70 L 110 45 L 160 60 L 210 25 L 260 50 L 310 15 L 360 35" 
                            fill="none" 
                            stroke="#10b981" 
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          
                          {/* Data points */}
                          <circle cx="60" cy="70" r="4" fill="#10b981" />
                          <circle cx="110" cy="45" r="4" fill="#10b981" />
                          <circle cx="160" cy="60" r="4" fill="#10b981" />
                          <circle cx="210" cy="25" r="4" fill="#10b981" />
                          <circle cx="260" cy="50" r="4" fill="#10b981" />
                          <circle cx="310" cy="15" r="4" fill="#10b981" />
                          <circle cx="360" cy="35" r="4" fill="#10b981" />
                          
                          {/* Gradient definition */}
                          <defs>
                            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
                            </linearGradient>
                          </defs>
                        </svg>
                        {/* X-axis labels */}
                        <div className="flex justify-between px-8 mt-1">
                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                            <span key={day} className="text-[10px] text-neutral-500">{day}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Top pages */}
                    <div className="rounded-xl border border-neutral-800 bg-neutral-800/30 p-5">
                      <p className="text-sm font-medium text-neutral-300 mb-4">Top Pages</p>
                      <div className="space-y-3">
                        {[
                          { page: "/", views: "4,281", percent: 45 },
                          { page: "/pricing", views: "2,847", percent: 30 },
                          { page: "/docs", views: "1,923", percent: 20 },
                          { page: "/blog", views: "892", percent: 10 },
                        ].map((item, i) => (
                          <div key={i}>
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-neutral-400 font-mono text-xs">{item.page}</span>
                              <span className="text-neutral-300">{item.views}</span>
                            </div>
                            <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-emerald-500 rounded-full"
                                style={{ width: `${item.percent}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logos / Trust bar */}
          <div className="mt-20">
            <p className="text-center text-sm text-neutral-500 mb-8">Trusted by teams building the future</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40">
              {["SaaS", "Startups", "Agencies", "Developers", "Product Teams"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-neutral-400">
                  <BarChart3 className="h-5 w-5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-4">
              <Code className="h-3 w-3" />
              Simple Setup
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Up and running in <span className="text-emerald-400">5 minutes</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              No complex configuration. Just add one script and start tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Create Account",
                desc: "Sign up for free and add your website domain to get your unique tracking ID.",
                icon: Users,
              },
              {
                step: "02",
                title: "Add Script",
                desc: "Copy our lightweight script tag and paste it in your website's head section.",
                icon: Code,
              },
              {
                step: "03",
                title: "View Insights",
                desc: "Watch real-time data flow in. Analyze, understand, and grow your audience.",
                icon: BarChart3,
              },
            ].map((item, i) => (
              <div key={i} className="relative group">
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-linear-to-r from-neutral-700 to-transparent z-0" />
                )}
                <div className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-emerald-500/30 hover:bg-neutral-900 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                      <item.icon className="h-6 w-6 text-emerald-500" />
                    </div>
                    <span className="text-5xl font-bold text-neutral-800 group-hover:text-neutral-700 transition-colors">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative border-t border-neutral-800 bg-neutral-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
              <Zap className="h-3 w-3" />
              Features
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Everything you need to{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
                scale smarter
              </span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              Powerful analytics without the complexity. Privacy-first by design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Activity,
                color: "emerald",
                title: "Real-time Analytics",
                desc: "Watch visitors as they happen. Live events, sessions, and page views with instant updates.",
              },
              {
                icon: TrendingUp,
                color: "blue",
                title: "Growth Insights",
                desc: "Identify trends and patterns. Understand what's working and optimize for growth.",
              },
              {
                icon: Users,
                color: "purple",
                title: "Visitor Tracking",
                desc: "Track unique visitors, returning users, and session durations without cookies.",
              },
              {
                icon: Globe,
                color: "orange",
                title: "Geo Analytics",
                desc: "See where your visitors come from. Country, region, and city-level insights.",
              },
              {
                icon: Smartphone,
                color: "pink",
                title: "Device Breakdown",
                desc: "Understand your audience's devices, browsers, and operating systems.",
              },
              {
                icon: Shield,
                color: "cyan",
                title: "Privacy-First",
                desc: "No cookies, no fingerprinting. GDPR & CCPA compliant out of the box.",
              },
            ].map((f, i) => {
              const colors: Record<string, string> = {
                emerald: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 group-hover:bg-emerald-500/20",
                blue: "bg-blue-500/10 text-blue-500 border-blue-500/20 group-hover:bg-blue-500/20",
                purple: "bg-purple-500/10 text-purple-500 border-purple-500/20 group-hover:bg-purple-500/20",
                orange: "bg-orange-500/10 text-orange-500 border-orange-500/20 group-hover:bg-orange-500/20",
                pink: "bg-pink-500/10 text-pink-500 border-pink-500/20 group-hover:bg-pink-500/20",
                cyan: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20 group-hover:bg-cyan-500/20",
              };
              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300"
                >
                  <div className={`h-12 w-12 rounded-xl border flex items-center justify-center mb-5 transition-colors ${colors[f.color]}`}>
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="relative border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm mb-4">
              <Star className="h-3 w-3 fill-yellow-400" />
              Testimonials
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Loved by <span className="text-yellow-400">builders</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              Join thousands of teams making data-driven decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Riya Sharma",
                role: "Founder @ TechStartup",
                image: "R",
                text: "Trackly replaced three different tools for us. The real-time insights are game-changing for our product decisions.",
              },
              {
                name: "Harsh Gupta",
                role: "Product Engineer @ SaaSCo",
                image: "H",
                text: "Finally, analytics that respect user privacy. Clean interface, fast queries, and the UX is beautiful.",
              },
              {
                name: "Sneha Patel",
                role: "Growth Lead @ StartupHub",
                image: "S",
                text: "Our conversion rate improved 40% after we started using Trackly's funnel analytics. Incredible tool.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-all duration-200"
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-300 leading-relaxed mb-6">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-800">
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-semibold">
                    {t.image}
                  </div>
                  <div>
                    <p className="font-medium text-white">{t.name}</p>
                    <p className="text-sm text-neutral-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative max-w-4xl mx-auto">
            {/* Background glow */}
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 via-transparent to-teal-500/10 rounded-3xl blur-xl" />
            
            <div className="relative rounded-3xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-xl p-12 lg:p-16 text-center overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px]" />
              
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                  Ready to understand your users?
                </h2>
                <p className="text-lg text-neutral-400 max-w-xl mx-auto mb-8">
                  Start tracking today. No credit card required. Get insights in minutes.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/signup">
                    <Button 
                      size="lg" 
                      className="h-14 px-8 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
                    >
                      Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/docs">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="h-14 px-8 border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
                    >
                      Read Documentation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/20">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Trackly</span>
              </div>
              <p className="text-neutral-400 max-w-sm mb-6">
                Privacy-first analytics for modern teams. Understand your users without compromising their privacy.
              </p>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  GDPR Compliant
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                  No Cookies
                </span>
              </div>
            </div>

            {/* Links */}
            {[
              {
                title: "Product",
                links: [
                  { name: "Features", href: "#features" },
                  { name: "Pricing", href: "#" },
                  { name: "Docs", href: "/docs" },
                  { name: "Changelog", href: "#" },
                ],
              },
              {
                title: "Company",
                links: [
                  { name: "About", href: "#" },
                  { name: "Blog", href: "#" },
                  { name: "Careers", href: "#" },
                  { name: "Contact", href: "#" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { name: "Privacy", href: "#" },
                  { name: "Terms", href: "#" },
                  { name: "Security", href: "#" },
                  { name: "GDPR", href: "#" },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <p className="font-semibold text-white mb-4">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-neutral-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <span>© 2026 Trackly. All rights reserved.</span>
            <span>Built with ❤️ for modern teams</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
