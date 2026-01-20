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
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030706] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient orb */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[1000px] h-[800px] bg-gradient-to-b from-emerald-600/20 via-emerald-500/10 to-transparent rounded-full blur-[120px] animate-pulse" />
          {/* Secondary orbs */}
          <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/15 to-teal-600/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-gradient-to-l from-emerald-500/15 to-teal-500/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-gradient-to-t from-emerald-500/10 to-transparent rounded-full blur-[100px]" />
        </div>

        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%2310b981'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-60" style={{ animationDuration: '3s' }} />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping opacity-40" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-50" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-teal-400 rounded-full animate-ping opacity-40" style={{ animationDuration: '4.5s', animationDelay: '2s' }} />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-950/80 via-neutral-900/90 to-emerald-950/80 border border-emerald-500/20 text-neutral-300 mb-10 backdrop-blur-xl shadow-lg shadow-emerald-500/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-emerald-400 to-teal-400"></span>
                </span>
                <span className="text-sm font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Live</span>
              </div>
              <span className="w-px h-4 bg-gradient-to-b from-transparent via-emerald-500/40 to-transparent" />
              <span className="text-sm text-neutral-400">
                Real-time tracking • No cookies • GDPR-ready
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              <span className="text-neutral-200">Analytics that</span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  just work
                </span>
                <span className="absolute -inset-2 bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-emerald-500/30 blur-2xl rounded-xl opacity-60" />
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8C50 2 150 2 198 8" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="#10b981"/>
                      <stop offset="50%" stopColor="#14b8a6"/>
                      <stop offset="100%" stopColor="#10b981"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
              Understand your users in real-time. Track sessions, analyze trends, 
              and grow faster — all with a dashboard designed for <span className="text-neutral-200">modern teams</span>.
            </p>

            {/* Premium CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="group relative h-12 px-7 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-500 text-white font-semibold rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.02] border border-emerald-400/20"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Start Free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-7 border-neutral-700/50 bg-neutral-900/30 text-neutral-300 hover:bg-neutral-800/50 hover:text-white hover:border-emerald-500/30 backdrop-blur-xl rounded-xl transition-all duration-300"
                >
                  <Play className="mr-2 h-4 w-4 text-emerald-400" />
                  View Demo
                </Button>
              </Link>
            </div>

            {/* Trust indicators with glass effect */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-4 lg:gap-8">
              {[
                { text: "Free forever plan", icon: Check },
                { text: "5-minute setup", icon: Zap },
                { text: "No credit card required", icon: Shield },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/40 border border-neutral-800/50 backdrop-blur-sm">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                    <item.icon className="h-3 w-3 text-emerald-400" />
                  </div>
                  <span className="text-sm text-neutral-400">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-24 lg:mt-32 max-w-6xl mx-auto">
            <div className="relative group">
              {/* Premium glow effect behind dashboard */}
              <div className="absolute -inset-1 bg-gradient-to-b from-emerald-500/30 via-emerald-500/10 to-transparent rounded-3xl blur-2xl group-hover:from-emerald-500/40 transition-all duration-500" />
              <div className="absolute -inset-px bg-gradient-to-b from-emerald-500/20 to-transparent rounded-3xl" />
              
              <div className="relative rounded-3xl border border-emerald-500/10 bg-[#0a0f0d]/95 backdrop-blur-2xl overflow-hidden shadow-[0_0_100px_-20px_rgba(16,185,129,0.3)]">
                {/* Premium Browser chrome */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-emerald-900/30 bg-gradient-to-r from-[#0a0f0d] via-[#0d1210] to-[#0a0f0d]">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/90 shadow-lg shadow-red-500/30" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/90 shadow-lg shadow-yellow-500/30" />
                    <span className="h-3 w-3 rounded-full bg-green-500/90 shadow-lg shadow-green-500/30" />
                  </div>
                  <div className="flex items-center gap-2 px-5 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800/50 text-xs text-neutral-400">
                    <Globe className="h-3.5 w-3.5 text-emerald-500" />
                    trackly.app/dashboard
                  </div>
                  <div className="w-16" />
                </div>

                {/* Dashboard content */}
                <div className="p-6 lg:p-10">
                  {/* Stats row */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: "Visitors Today", value: "12,847", change: "+18%", icon: Users },
                      { label: "Page Views", value: "48,293", change: "+24%", icon: Eye },
                      { label: "Avg. Duration", value: "3m 42s", change: "+8%", icon: Clock },
                      { label: "Live Now", value: "284", change: "", icon: Activity, live: true },
                    ].map((stat, i) => (
                      <div key={i} className="rounded-2xl border border-emerald-900/20 bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 p-5 hover:border-emerald-500/20 transition-all duration-300">
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

                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Chart area */}
                    <div className="lg:col-span-2 rounded-2xl border border-emerald-900/20 bg-gradient-to-br from-neutral-900/60 to-neutral-950/60 p-6">
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
                    <div className="rounded-2xl border border-emerald-900/20 bg-gradient-to-br from-neutral-900/60 to-neutral-950/60 p-6">
                      <p className="text-sm font-semibold text-neutral-200 mb-5">Top Pages</p>
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
          <div className="mt-24">
            <p className="text-center text-sm text-neutral-500 mb-10 uppercase tracking-widest">Trusted by teams building the future</p>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
              {["SaaS", "Startups", "Agencies", "Developers", "Product Teams"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-neutral-500 hover:text-emerald-400 transition-colors duration-300">
                  <BarChart3 className="h-5 w-5" />
                  <span className="font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative border-t border-emerald-900/20 bg-gradient-to-b from-[#030706] via-[#051410] to-[#030706]">
        {/* Decorative gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-950/80 to-emerald-900/40 border border-emerald-500/20 text-emerald-400 text-sm mb-6 shadow-lg shadow-emerald-500/10">
              <Code className="h-4 w-4" />
              Simple Setup
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Up and running in <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">5 minutes</span>
            </h2>
            <p className="mt-5 text-lg text-neutral-400 leading-relaxed">
              No complex configuration. Just add one script and start tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
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
                  <div className="hidden md:block absolute top-14 left-full w-full h-px bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-transparent z-0" />
                )}
                <div className="relative p-8 lg:p-10 rounded-3xl border border-emerald-900/30 bg-gradient-to-br from-[#0a0f0d]/80 to-neutral-950/80 backdrop-blur-xl hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-teal-500/20 transition-all duration-300 shadow-lg shadow-emerald-500/10">
                      <item.icon className="h-7 w-7 text-emerald-400" />
                    </div>
                    <span className="text-6xl font-bold bg-gradient-to-b from-neutral-700 to-neutral-800 bg-clip-text text-transparent group-hover:from-emerald-900 group-hover:to-emerald-950 transition-all duration-300">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative border-t border-emerald-900/20 bg-[#030706]">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-950/80 to-teal-900/40 border border-emerald-500/20 text-emerald-400 text-sm mb-6 shadow-lg shadow-emerald-500/10">
              <Zap className="h-4 w-4" />
              Features
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                scale smarter
              </span>
            </h2>
            <p className="mt-5 text-lg text-neutral-400 leading-relaxed">
              Powerful analytics without the complexity. Privacy-first by design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Activity,
                title: "Real-time Analytics",
                desc: "Watch visitors as they happen. Live events, sessions, and page views with instant updates.",
              },
              {
                icon: TrendingUp,
                title: "Growth Insights",
                desc: "Identify trends and patterns. Understand what's working and optimize for growth.",
              },
              {
                icon: Users,
                title: "Visitor Tracking",
                desc: "Track unique visitors, returning users, and session durations without cookies.",
              },
              {
                icon: Globe,
                title: "Geo Analytics",
                desc: "See where your visitors come from. Country, region, and city-level insights.",
              },
              {
                icon: Smartphone,
                title: "Device Breakdown",
                desc: "Understand your audience's devices, browsers, and operating systems.",
              },
              {
                icon: Shield,
                title: "Privacy-First",
                desc: "No cookies, no fingerprinting. GDPR & CCPA compliant out of the box.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl border border-emerald-900/30 bg-gradient-to-br from-[#0a0f0d]/80 to-neutral-950/80 backdrop-blur-xl hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 group-hover:from-emerald-500/30 group-hover:to-teal-500/20 transition-all duration-300 shadow-lg shadow-emerald-500/10">
                    <f.icon className="h-7 w-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="relative border-t border-emerald-900/20 bg-gradient-to-b from-[#030706] via-[#051410] to-[#030706]">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-950/80 to-teal-900/40 border border-emerald-500/20 text-emerald-400 text-sm mb-6 shadow-lg shadow-emerald-500/10">
              <Star className="h-4 w-4 fill-emerald-400" />
              Testimonials
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Loved by <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">builders</span>
            </h2>
            <p className="mt-5 text-lg text-neutral-400 leading-relaxed">
              Join thousands of teams making data-driven decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                className="group relative p-8 rounded-3xl border border-emerald-900/30 bg-gradient-to-br from-[#0a0f0d]/80 to-neutral-950/80 backdrop-blur-xl hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center gap-1.5 text-emerald-400 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-emerald-400" />
                    ))}
                  </div>
                  <p className="text-neutral-300 leading-relaxed mb-8 text-lg">&quot;{t.text}&quot;</p>
                  <div className="flex items-center gap-4 pt-5 border-t border-emerald-900/30">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30">
                      {t.image}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-sm text-neutral-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-emerald-900/20 bg-[#030706]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="relative max-w-5xl mx-auto">
            {/* Premium background glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-teal-500/20 rounded-[2.5rem] blur-3xl" />
            <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/30 via-transparent to-teal-500/30 rounded-[2.5rem]" />
            
            <div className="relative rounded-[2.5rem] border border-emerald-500/20 bg-gradient-to-br from-[#0a0f0d]/95 to-[#030706]/95 backdrop-blur-2xl p-14 lg:p-20 text-center overflow-hidden shadow-[0_0_100px_-20px_rgba(16,185,129,0.3)]">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-emerald-500/5 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5">
                  Ready to understand your users?
                </h2>
                <p className="text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
                  Start tracking today. No credit card required. Get insights in minutes.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/signup">
                    <Button 
                      size="lg" 
                      className="group h-12 px-7 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-500 text-white font-semibold rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.02] border border-emerald-400/20"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      Get Started Free 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/docs">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="h-12 px-7 border-neutral-700/50 bg-neutral-900/30 text-neutral-300 hover:bg-neutral-800/50 hover:text-white hover:border-emerald-500/30 backdrop-blur-xl rounded-xl transition-all duration-300"
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
      <footer className="border-t border-emerald-900/20 bg-[#020504]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl shadow-emerald-500/30">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Trackly</span>
              </div>
              <p className="text-neutral-400 max-w-sm mb-8 leading-relaxed">
                Privacy-first analytics for modern teams. Understand your users without compromising their privacy.
              </p>
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-950/80 to-emerald-900/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-lg shadow-emerald-500/10">
                  GDPR Compliant
                </span>
                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-950/80 to-teal-900/40 border border-teal-500/30 text-teal-400 text-xs font-semibold shadow-lg shadow-teal-500/10">
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
                <p className="font-bold text-white mb-5">{col.title}</p>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-emerald-900/20 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
            <span>© 2026 Trackly. All rights reserved.</span>
            <span className="flex items-center gap-2">Built with <span className="text-emerald-500">❤️</span> for modern teams</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
