"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ScriptCard from "@/components/ScriptCard";
import WebsiteScriptLoader from "@/components/loaders/WebsiteScriptLoader";
import WebsiteDetailInput from "@/components/WebsiteDetailInput";
import { LiveUserType, WebsiteInfoType, type WebsiteType } from "@/lib/types";
import WebsiteAnalytics from "@/components/WebsiteAnalytics";
import axios from "axios";
import { format } from "date-fns";
import WebRefCard from '@/components/WebRefCard';
import WebGeoCard from "@/components/WebGeoCard";
import WebDeviceCard from "@/components/WebDeviceCard";

export default function WebsitePage() {
  const params = useParams();
  const websiteId = params.websiteId as string;
  const [website, setWebsite] = useState<WebsiteType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [websiteInfo, setWebsiteInfo] = useState<WebsiteInfoType | null>();
  const [websiteInfoLoading, setWebsiteInfoLoading] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [liveUsers, setLiveUsers] = useState<LiveUserType[]>([]);
  useEffect(() => {

    if (websiteId) {
      fetchWebsite();
      getWebsiteAnalytics();
    }
  }, []);


  const fetchWebsite = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/website/${websiteId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch website");
      }
      const data = await response.json();
      setWebsite(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const getWebsiteAnalytics = async () => {
    setWebsiteInfoLoading(true);
    const fromDate = format(formData?.fromDate || new Date(), 'yyyy-MM-dd');
    const toDate = formData?.toDate ? format(formData?.toDate, 'yyyy-MM-dd') : fromDate;
    const result = await axios.get(`/api/website?websiteId=${websiteId}&from=${fromDate}&to=${toDate}`);
    setWebsiteInfo(result?.data[0]);
    setWebsiteInfoLoading(false);
    GetLiveUsers();
  };

  const GetLiveUsers = async()=>{
    const result = await axios.get(`/api/live?websiteId=${websiteId}`);
    setLiveUsers(result.data);
  }
  useEffect(() => {
    getWebsiteAnalytics();
  }, [formData?.fromDate, formData?.toDate, formData?.analyticsType]);
  if (loading) {
    return (
      <WebsiteScriptLoader />
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
        <Card className="border-red-500/50 bg-neutral-900 max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-red-400">Error</CardTitle>
            <CardDescription className="text-neutral-400">{error}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (!website) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
        <Card className="bg-neutral-900 border-neutral-800 max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-neutral-100">Website Not Found</CardTitle>
            <CardDescription className="text-neutral-400">
              The website you&apos;re looking for doesn&apos;t exist.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <span className="text-white font-bold text-lg">
                {website.domain?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-neutral-100">{website.domain}</h1>
              <p className="text-neutral-400 text-sm">Website Analytics Dashboard</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Analytics Section - Takes 3 columns */}
          <div className="xl:col-span-3 space-y-6">
            <WebsiteDetailInput setFormData={setFormData} setReloadData={() => getWebsiteAnalytics}  websiteId={websiteId}/>
            <WebsiteAnalytics websiteInfo={websiteInfo} loading={websiteInfoLoading} analyticsType={formData?.analyticsType} liveUserCount = {liveUsers?.length} />
            <div>
            <WebRefCard websiteAnalytics = {websiteInfo?.analytics} loading = {loading}/>
            <WebGeoCard websiteAnalytics = {websiteInfo?.analytics} loading = {loading}/>
            <WebDeviceCard websiteAnalytics = {websiteInfo?.analytics} loading = {loading}/>
            </div>
          </div>
          
          {/* Script Section - Compact sidebar */}
          <div className="xl:col-span-1">
            <ScriptCard website={website} />
          </div>
        </div>
      </div>
    </div>
  );
}