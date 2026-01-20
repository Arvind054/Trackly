"use client"
import React, { useEffect } from 'react'
import { BarChart3, ArrowRight, User, LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSession } from "@/components/session-provider"
import { authClient } from "@/lib/auth-client"
import toast from 'react-hot-toast';

function Header() {
   const { user, isAuthenticated, isLoading } = useSession();


    const handleSignOut = async () => {
    try {
      await authClient.signOut()
      toast.success("Signed out successfully")
      window.location.href = "/"
    } catch (error) {
      toast.error("Failed to sign out")
    }
  }
  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-900/20 bg-[#030706]/90 backdrop-blur-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Trackly
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <Link href="/" className="hover:text-emerald-400 transition-colors duration-300">
              Home
            </Link>
            <Link href="#features" className="hover:text-emerald-400 transition-colors duration-300">
              Features
            </Link>
            <Link href="/dashboard" className="hover:text-emerald-400 transition-colors duration-300">
              Dashboard
            </Link>
            <Link href="/docs" className="hover:text-emerald-400 transition-colors duration-300">
              Docs
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {isLoading ? (
              <div className="h-9 w-20 bg-neutral-800/50 rounded-xl animate-pulse" />
            ) : isAuthenticated ? (
              <>
                <Link href="/profile" className="block">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "User"}
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full ring-2 ring-emerald-500/30 hover:ring-emerald-500 transition-all duration-300 cursor-pointer"
                    />
                  ) : (
                    <div className="h-9 w-9 rounded-full ring-2 ring-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center hover:ring-emerald-500 transition-all duration-300 cursor-pointer">
                      <User className="h-5 w-5 text-emerald-400" />
                    </div>
                  )}
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleSignOut} 
                  className="gap-2 text-neutral-400 hover:text-white hover:bg-neutral-800/50 rounded-xl transition-all duration-300"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Link href="/login">
                <Button size="sm" className="gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300">
                  <LogIn className="h-4 w-4" />
                  Get Started
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header