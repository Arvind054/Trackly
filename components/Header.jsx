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
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="grid place-items-center h-9 w-9 rounded-lg bg-emerald-500">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-white">
              Trackly
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#features" className="hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/dashboard" className="hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/docs" className="hover:text-white transition-colors">
              Docs
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {isLoading ? (
              <div className="h-9 w-20 bg-neutral-800 rounded-md animate-pulse" />
            ) : isAuthenticated ? (
              <>
                <Link href="/profile" className="block">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "User"}
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full border-2 border-emerald-500/20 hover:border-emerald-500 transition-colors cursor-pointer"
                    />
                  ) : (
                    <div className="h-9 w-9 rounded-full border-2 border-emerald-500/20 bg-emerald-500/10 flex items-center justify-center hover:border-emerald-500 transition-colors cursor-pointer">
                      <User className="h-5 w-5 text-emerald-500" />
                    </div>
                  )}
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleSignOut} 
                  className="gap-2 text-neutral-300 hover:text-white hover:bg-neutral-800"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Link href="/login">
                <Button size="sm" className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-white">
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