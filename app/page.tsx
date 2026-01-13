import Link from "next/link";
import { Button } from "@/components/ui/button";
import {Card, CardDescription, CardHeader,CardTitle,} from "@/components/ui/card";
import {BarChart3, Zap, Shield, TrendingUp, Globe, Eye, Users, Activity, ArrowRight, Check, Star,} from "lucide-react";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white selection:bg-cyan-400/30 selection:text-white">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-600/30 blur-[140px]" />
        <div className="absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-500/25 blur-[150px]" />
        <div className="absolute bottom-[-200px] left-1/3 h-[650px] w-[650px] rounded-full bg-indigo-500/15 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      {/* Header */}
      <Header/>
      {/* HERO */}
      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 lg:pt-28">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 mb-7">
              <Zap className="h-4 w-4 text-cyan-300" />
              <span className="text-sm">
                AI-powered real-time tracking • No cookies • GDPR-ready
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Website analytics that feel{" "}
              <span className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                unfairly powerful
              </span>
              .
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Trackly helps teams understand what users do in real-time 
              sessions, events, trends and conversions  with a dashboard designed
              to make decisions fast.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-12 px-8 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/20"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                How it Works
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/50">
               Setup in 2 minutes • Get Detailed Real-time Analytics
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-14 lg:mt-20 max-w-6xl mx-auto">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-blue-700/10">
              <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-cyan-500/30 to-blue-600/30 blur-xl opacity-70" />
              <div className="relative rounded-2xl bg-[#0b0f1a] border border-white/10 overflow-hidden">
                {/* fake topbar */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <span className="h-3 w-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-xs text-white/50">trackly.app/dashboard</span>
                </div>

                {/* fake dashboard */}
                <div className="p-6 grid lg:grid-cols-3 gap-4">
                  <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-white/60">Realtime Visitors</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-500/20">
                        LIVE
                      </span>
                    </div>
                    <div className="mt-4 flex items-end gap-4">
                      <div className="text-4xl font-bold">1,284</div>
                      <div className="text-sm text-emerald-200">+18% today</div>
                    </div>
                    <div className="mt-6 h-32 rounded-xl bg-linear-to-r from-white/5 to-white/0 border border-white/10 flex items-center justify-center text-white/40 text-sm">
                      Graph Preview
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm text-white/60">Top Conversions</p>
                    <div className="mt-5 space-y-3">
                      {[
                        ["Signup", "42%"],
                        ["Checkout", "21%"],
                        ["Subscribe", "13%"],
                      ].map(([k, v]) => (
                        <div key={k} className="flex items-center justify-between">
                          <span className="text-sm text-white/80">{k}</span>
                          <span className="text-sm text-cyan-200">{v}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-xs text-white/60">
                      AI Insight: Your conversion spikes after 6PM — schedule
                      campaigns accordingly.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm text-white/60">Security</p>
                    <div className="mt-3 flex items-center gap-2 text-white/80">
                      <Shield className="h-4 w-4 text-cyan-300" />
                      AES-256 + RLS enabled
                    </div>
                    <div className="mt-5 h-24 rounded-xl border border-white/10 bg-white/5 grid place-items-center text-white/40 text-sm">
                      Heatmap Preview
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm text-white/60">Global traffic</p>
                    <div className="mt-4 flex items-center gap-2 text-white/80">
                      <Globe className="h-4 w-4 text-cyan-300" />
                      72 countries
                    </div>
                    <div className="mt-4 text-3xl font-bold">309K</div>
                    <p className="text-xs text-white/50 mt-1">sessions this month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick trust row */}
          <div className="mt-14 lg:mt-16 flex flex-wrap justify-center gap-4 text-sm text-white/50">
            {["Built for SaaS", "Built for startups", "Built for founders", "Built for product teams"].map(
              (t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Everything you need to scale smarter.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Trackly gives you realtime insights without complexity — and without
            compromising privacy.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Activity className="h-6 w-6 text-cyan-300" />,
              title: "Realtime analytics",
              desc: "Live events, sessions, and conversions with <50ms ingestion pipeline.",
            },
            {
              icon: <TrendingUp className="h-6 w-6 text-emerald-200" />,
              title: "Growth insights",
              desc: "Identify trends instantly using anomaly detection & AI summaries.",
            },
            {
              icon: <Users className="h-6 w-6 text-purple-200" />,
              title: "User tracking",
              desc: "Understand cohorts, funnels, retention and user journeys end-to-end.",
            },
            {
              icon: <Globe className="h-6 w-6 text-orange-200" />,
              title: "Geo insights",
              desc: "Country/city traffic analytics + language and device breakdown.",
            },
            {
              icon: <Eye className="h-6 w-6 text-sky-200" />,
              title: "Privacy-first",
              desc: "Cookie-less analytics, GDPR compliant, no fingerprinting.",
            },
            {
              icon: <Shield className="h-6 w-6 text-red-200" />,
              title: "Enterprise security",
              desc: "Row level security, audit logs, encryption and secure ingestion.",
            },
          ].map((f) => (
            <Card
              key={f.title}
              className="relative overflow-hidden border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-2xl"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_40%)]" />
              <CardHeader className="relative">
                <div className="h-12 w-12 rounded-xl bg-black/30 border border-white/10 grid place-items-center mb-4">
                  {f.icon}
                </div>
                <CardTitle className="text-white">{f.title}</CardTitle>
                <CardDescription className="text-white/60 leading-relaxed">
                  {f.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold">Loved by builders.</h2>
          <p className="mt-4 text-lg text-white/70">
            Teams ship faster when decisions are data-driven.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Riya Sharma",
              role: "Founder",
              text: "Trackly instantly replaced 3 different tools for us. The AI insights are insanely useful.",
            },
            {
              name: "Harsh Gupta",
              role: "Product Engineer",
              text: "The dashboard feels premium. Clean data, fast queries, and amazing UX.",
            },
            {
              name: "Sneha Patel",
              role: "Growth Manager",
              text: "Our conversion rate improved after we started using funnels + realtime sessions.",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-1 text-yellow-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-300" />
                ))}
              </div>
              <p className="mt-4 text-white/75 leading-relaxed">“{t.text}”</p>
              <div className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-white/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl border border-white/10 bg-linear-to-r from-cyan-500/20 to-blue-600/20 p-10 lg:p-14 text-center overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%)]" />
          <div className="relative">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Build smarter products with Trackly.
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Start tracking today and unlock AI-powered insights that help you
              improve conversions, retention and growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-white/15 bg-white/5 text-white hover:bg-white/10">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-white/5 border border-white/10">
                  <BarChart3 className="h-6 w-6 text-cyan-300" />
                </div>
                <span className="text-lg font-semibold">Trackly</span>
              </div>
              <p className="mt-3 text-sm text-white/55 max-w-sm">
                Premium analytics for teams who want speed, clarity and privacy.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
              {[
                {
                  title: "Product",
                  links: ["Features", "Pricing", "Changelog"],
                },
                {
                  title: "Company",
                  links: ["About", "Blog", "Careers"],
                },
                {
                  title: "Resources",
                  links: ["Docs", "API", "Support"],
                },
                {
                  title: "Legal",
                  links: ["Privacy", "Terms", "Security"],
                },
              ].map((col) => (
                <div key={col.title}>
                  <p className="font-semibold text-white/90">{col.title}</p>
                  <ul className="mt-4 space-y-2 text-white/55">
                    {col.links.map((l) => (
                      <li key={l}>
                        <Link href="#" className="hover:text-white transition-colors">
                          {l}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/50">
            <span>© 2026 Trackly. All rights reserved.</span>
            <span>Made for modern SaaS teams.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
