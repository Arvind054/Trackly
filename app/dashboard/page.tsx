"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Globe, ExternalLink, Loader2, BarChart3 } from "lucide-react";
import DashboardWebCard from '../../components/DashboardWebCard';
import Link from 'next/link';
import { useSession } from '@/components/session-provider';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import type { WebsiteInfoType } from "@/lib/types";
import { format } from 'date-fns';
const DashboardPage = () => {
  const { user, isAuthenticated, isLoading } = useSession();
  const router = useRouter();
  const [websiteList, setWebsiteList] = useState<WebsiteInfoType[]>([]);
  const [loading, setLoading] = useState(true); // Start as true to show loading initially
   
  useEffect(() => {
    // Wait for session to finish loading
    if (isLoading) return;
    
    // If not authenticated after session loaded, redirect to login
    if (!isAuthenticated) {
      router.push("/login");
      toast.error("Login/Signup to Continue");
      return;
    }
    
    // Fetch websites only when authenticated
    async function getUserWebsites() {
      setLoading(true);
      try {
        const today = format(new Date, 'yyy-MM-dd');
        const result = await axios.get(`/api/website?from=${today}&to=${today}`);
        setWebsiteList(result?.data || []);
      } catch (err: any) {
        toast.error(err?.response?.data?.error || err.message);
      } finally {
        setLoading(false);
      }
    }
    
    getUserWebsites();
  }, [isLoading, isAuthenticated, router]);

  // Loading State
  if (isLoading || loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          {/* Animated Logo */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-emerald-500/20 blur-xl animate-pulse" />
            <div className="relative grid place-items-center h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
          </div>
          
          {/* Loading Text */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 text-emerald-500 animate-spin" />
              <span className="text-neutral-300 font-medium">Loading your dashboard</span>
            </div>
            <p className="text-neutral-500 text-sm">Please wait a moment...</p>
          </div>

          {/* Skeleton Cards Preview */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl px-6">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 space-y-4"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-neutral-800 animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-24 bg-neutral-800 rounded animate-pulse" />
                    <div className="h-3 w-32 bg-neutral-800/60 rounded animate-pulse" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-neutral-800/40 rounded animate-pulse" />
                  <div className="h-3 w-3/4 bg-neutral-800/40 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back{user?.name ? `, ${user.name.split(' ')[0]}` : ''} 👋
          </h1>
          <p className="text-neutral-400">
            Here's what's happening with your websites today.
          </p>
        </div>

        {/* Stats Overview */}
        {websiteList.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <Globe className="h-5 w-5 text-emerald-500" />
                </div>
                <span className="text-sm text-neutral-400">Total Websites</span>
              </div>
              <p className="text-3xl font-bold text-white">{websiteList.length}</p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                </div>
                <span className="text-sm text-neutral-400">Total Visitors Today</span>
              </div>
              <p className="text-3xl font-bold text-white">
                {websiteList.reduce((sum, w) => sum + (w.analytics?.totalVisitors || 0), 0)}
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <ExternalLink className="h-5 w-5 text-purple-500" />
                </div>
                <span className="text-sm text-neutral-400">Page Views</span>
              </div>
              <p className="text-3xl font-bold text-white">
                {websiteList.reduce((sum, w) => sum + (w.analytics?.totalSessions || 0), 0)}
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <Loader2 className="h-5 w-5 text-orange-500" />
                </div>
                <span className="text-sm text-neutral-400">Avg Active Time</span>
              </div>
              <p className="text-3xl font-bold text-white">
                {Math.floor(websiteList.reduce((sum, w) => sum + (w.analytics?.totalActiveTime || 0), 0) / Math.max(websiteList.length, 1) / 60)} min
              </p>
            </div>
          </div>
        )}

        {/* Websites Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              My Websites
            </h2>
            <p className="text-neutral-500 mt-1 text-sm">
              Manage and monitor all your websites in one place
            </p>
          </div>
          <Link href={"/dashboard/new"}>
          <Button 
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all">
            <Plus className="h-4 w-4" />
            Add Website
          </Button>
          </Link>
        </div>

        {/* Content Section */}
        {websiteList.length === 0 ? (
          // Empty State
          <div className="rounded-2xl border border-dashed border-neutral-800 bg-gradient-to-b from-neutral-900/80 to-neutral-900/30">
            <div className="flex flex-col items-center justify-center py-24 text-center px-6">
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-2xl bg-emerald-500/20 blur-xl" />
                <div className="relative rounded-2xl bg-neutral-800 p-6">
                  <Globe className="h-12 w-12 text-emerald-500" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white">No websites yet</h2>
              <p className="text-neutral-400 mb-8 max-w-md">
                Start tracking your website analytics by adding your first website. It only takes a minute to set up.
              </p>
              <Link href={"/dashboard/new"}>
              <Button 
                size="lg"
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all">
                <Plus className="h-5 w-5" />
                Add Your First Website
              </Button>
              </Link>
            </div>
          </div>
        ) : (
          // Website Cards Grid
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {websiteList.map((website:any, idx) => (
              <DashboardWebCard websiteInfo = {website} key={idx}/>
            ))}
            
            {/* Add New Website Card */}
            <Link href="/dashboard/new" className="group">
              <div className="h-full min-h-[200px] rounded-xl border-2 border-dashed border-neutral-800 bg-neutral-900/30 flex flex-col items-center justify-center gap-3 hover:border-emerald-500/50 hover:bg-neutral-900/50 transition-all duration-200 cursor-pointer">
                <div className="p-3 rounded-xl bg-neutral-800 group-hover:bg-emerald-500/20 transition-colors">
                  <Plus className="h-6 w-6 text-neutral-400 group-hover:text-emerald-500 transition-colors" />
                </div>
                <span className="text-neutral-400 group-hover:text-neutral-300 font-medium transition-colors">Add New Website</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
