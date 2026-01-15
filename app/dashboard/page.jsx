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
const DashboardPage = () => {
  const { user, isAuthenticated, isLoading } = useSession();
  const router = useRouter();
  const [websiteList, setWebsiteList] = useState([]);
  const [loading, setLoading] = useState(false);
   
   async function getUserWebsites(){
    if(isLoading)return ;
    if(!isAuthenticated){
      router.push("/login");
       toast.error("Login/Signup to Continue");
         return ;
      }
      setLoading(true);
      try{
          const result = await axios.get("/api/website");
          setWebsiteList(result?.data);
      }catch(err){
        toast.error(err.message);
      }finally{
        setLoading(false);
      }
   }
useEffect(()=>{
  getUserWebsites();
}, [user, isLoading])

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

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              My Websites
            </h1>
            <p className="text-neutral-500 mt-1 text-sm">
              Manage and monitor all your websites in one place
            </p>
          </div>
          <Link href={"/dashboard/new"}>
          <Button 
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium">
            <Plus className="h-4 w-4" />
            Add Website
          </Button>
          </Link>
        </div>

        {/* Content Section */}
        {websiteList.length === 0 ? (
          // Empty State
          <div className="rounded-xl border border-dashed border-neutral-800 bg-neutral-900/50">
            <div className="flex flex-col items-center justify-center py-20 text-center px-6">
              <div className="rounded-xl bg-neutral-800 p-5 mb-5">
                <Globe className="h-10 w-10 text-neutral-400" />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-white">No websites yet</h2>
              <p className="text-neutral-500 mb-6 max-w-sm text-sm">
                You don't have any website added. Add your first website to start tracking.
              </p>
              <Link href={"/dashboard/new"}>
              <Button 
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium">
                <Plus className="h-4 w-4" />
                Add Your First Website
              </Button>
              </Link>
            </div>
          </div>
        ) : (
          // Website Cards Grid
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {websiteList.map((website) => (
              <DashboardWebCard website = {website} key={website.id}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
