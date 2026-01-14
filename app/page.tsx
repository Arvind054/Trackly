import Link from "next/link";
import { Button } from "@/components/ui/button";
import {Card, CardDescription, CardHeader,CardTitle,} from "@/components/ui/card";
import {BarChart3, Zap, Shield, TrendingUp, Globe, Eye, Users, Activity, ArrowRight, Check, Star,} from "lucide-react";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* HERO */}
      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 lg:pt-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 mb-8">
              <Zap className="h-4 w-4 text-emerald-400" />
              <span className="text-sm">
                Real-time tracking • No cookies • GDPR-ready
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Website analytics that{" "}
              <span className="text-emerald-400">
                just work
              </span>
            </h1>

            <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Trackly helps teams understand what users do in real-time — 
              sessions, events, trends and conversions — with a dashboard designed
              to make decisions fast.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-12 px-8 bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
              >
                How it Works
              </Button>
            </div>

            <p className="mt-6 text-sm text-neutral-500">
              Setup in 2 minutes • Get detailed real-time analytics
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 lg:mt-20 max-w-5xl mx-auto">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden">
              {/* fake topbar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-900">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-neutral-700" />
                  <span className="h-3 w-3 rounded-full bg-neutral-700" />
                  <span className="h-3 w-3 rounded-full bg-neutral-700" />
                </div>
                <span className="text-xs text-neutral-500">trackly.app/dashboard</span>
                <div className="w-12" />
              </div>

              {/* fake dashboard */}
              <div className="p-6 grid lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 rounded-lg border border-neutral-800 bg-neutral-800/50 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-400">Realtime Visitors</p>
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      LIVE
                    </span>
                  </div>
                  <div className="mt-4 flex items-end gap-4">
                    <div className="text-4xl font-bold text-white">1,284</div>
                    <div className="text-sm text-emerald-400">+18% today</div>
                  </div>
                  <div className="mt-6 h-28 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-500 text-sm">
                    Graph Preview
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-5">
                  <p className="text-sm text-neutral-400">Top Conversions</p>
                  <div className="mt-5 space-y-3">
                    {[
                      ["Signup", "42%"],
                      ["Checkout", "21%"],
                      ["Subscribe", "13%"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between">
                        <span className="text-sm text-neutral-300">{k}</span>
                        <span className="text-sm text-emerald-400">{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-xs text-neutral-400">
                    Insight: Conversion spikes after 6PM — schedule campaigns accordingly.
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-5">
                  <p className="text-sm text-neutral-400">Security</p>
                  <div className="mt-3 flex items-center gap-2 text-neutral-300">
                    <Shield className="h-4 w-4 text-emerald-400" />
                    AES-256 + RLS enabled
                  </div>
                  <div className="mt-5 h-20 rounded-lg border border-neutral-700 bg-neutral-800 grid place-items-center text-neutral-500 text-sm">
                    Heatmap Preview
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-5">
                  <p className="text-sm text-neutral-400">Global traffic</p>
                  <div className="mt-4 flex items-center gap-2 text-neutral-300">
                    <Globe className="h-4 w-4 text-emerald-400" />
                    72 countries
                  </div>
                  <div className="mt-4 text-3xl font-bold text-white">309K</div>
                  <p className="text-xs text-neutral-500 mt-1">sessions this month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick trust row */}
          <div className="mt-14 flex flex-wrap justify-center gap-3 text-sm text-neutral-500">
            {["Built for SaaS", "Built for startups", "Built for founders", "Built for product teams"].map(
              (t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 border-t border-neutral-800">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Everything you need to scale smarter
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Trackly gives you realtime insights without complexity — and without
            compromising privacy.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: <Activity className="h-5 w-5 text-emerald-400" />,
              title: "Realtime analytics",
              desc: "Live events, sessions, and conversions with <50ms ingestion pipeline.",
            },
            {
              icon: <TrendingUp className="h-5 w-5 text-emerald-400" />,
              title: "Growth insights",
              desc: "Identify trends instantly using anomaly detection & AI summaries.",
            },
            {
              icon: <Users className="h-5 w-5 text-emerald-400" />,
              title: "User tracking",
              desc: "Understand cohorts, funnels, retention and user journeys end-to-end.",
            },
            {
              icon: <Globe className="h-5 w-5 text-emerald-400" />,
              title: "Geo insights",
              desc: "Country/city traffic analytics + language and device breakdown.",
            },
            {
              icon: <Eye className="h-5 w-5 text-emerald-400" />,
              title: "Privacy-first",
              desc: "Cookie-less analytics, GDPR compliant, no fingerprinting.",
            },
            {
              icon: <Shield className="h-5 w-5 text-emerald-400" />,
              title: "Enterprise security",
              desc: "Row level security, audit logs, encryption and secure ingestion.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 hover:border-neutral-700 hover:bg-neutral-800/50 transition-all duration-200"
            >
              <div className="h-10 w-10 rounded-lg bg-neutral-800 grid place-items-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-800">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Loved by builders</h2>
          <p className="mt-4 text-lg text-neutral-400">
            Teams ship faster when decisions are data-driven.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {[
            {
              name: "Riya Sharma",
              role: "Founder",
              text: "Trackly instantly replaced 3 different tools for us. The insights are insanely useful.",
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
              className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 hover:border-neutral-700 transition-all duration-200"
            >
              <div className="flex items-center gap-1 text-emerald-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-emerald-400" />
                ))}
              </div>
              <p className="mt-4 text-neutral-300 text-sm leading-relaxed">"{t.text}"</p>
              <div className="mt-5 pt-5 border-t border-neutral-800">
                <p className="font-medium text-white">{t.name}</p>
                <p className="text-sm text-neutral-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-10 lg:p-14 text-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Build smarter products with Trackly
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
              Start tracking today and unlock insights that help you
              improve conversions, retention and growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 bg-emerald-500 hover:bg-emerald-600 text-white font-medium">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="grid place-items-center h-9 w-9 rounded-lg bg-emerald-500">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-semibold text-white">Trackly</span>
              </div>
              <p className="mt-3 text-sm text-neutral-500 max-w-sm">
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
                  <p className="font-medium text-white">{col.title}</p>
                  <ul className="mt-4 space-y-2 text-neutral-500">
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

          <div className="mt-12 pt-7 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-neutral-500">
            <span>© 2026 Trackly. All rights reserved.</span>
            <span>Made for modern SaaS teams.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
