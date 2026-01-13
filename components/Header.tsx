import React from 'react'
import { BarChart3,ArrowRight,} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {}

function Header({}: Props) {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-white/5 border border-white/10">
                <BarChart3 className="h-6 w-6 text-cyan-300" />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                Trackly
              </span>
            </div>

            <div className="hidden md:flex items-center gap-7 text-sm text-white/70">
              <Link href="#features" className="hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="hover:text-white transition-colors">
                Reviews
              </Link>
              <Link href="#docs" className="hover:text-white transition-colors">
                Docs
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                Sign In
              </Button>
              <Button className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Header