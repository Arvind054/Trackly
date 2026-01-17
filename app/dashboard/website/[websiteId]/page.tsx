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
import { WebsiteInfoType, type WebsiteType } from "@/lib/types";
import WebsiteAnalytics from "@/components/WebsiteAnalytics";
import axios from "axios";
import { format } from "date-fns";


export default function WebsitePage() {
  const params = useParams();
  const websiteId = params.websiteId as string;
  const [website, setWebsite] = useState<WebsiteType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [websiteInfo,setWebsiteInfo] = useState<WebsiteInfoType|null>();
  const [websiteInfoLoading, setWebsiteInfoLoading] = useState(false);
  const [formData, setFormData] = useState<any>({});
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

    const getWebsiteAnalytics = async()=>{
      setWebsiteInfoLoading(true);
      const fromDate = format(formData?.fromDate || new Date(), 'yyyy-MM-dd');
      const toDate = formData?.toDate ? format(formData?.toDate, 'yyyy-MM-dd'): fromDate;
      const result = await axios.get(`/api/website?websiteId=${websiteId}&from=${fromDate}&to=${toDate}`);
      setWebsiteInfo(result?.data[0]);
      setWebsiteInfoLoading(false);
    }
 useEffect(()=>{
   getWebsiteAnalytics();
 }, [formData?.fromDate, formData?.toDate, formData?.analyticsType]);
  if (loading) {
    return (
      <WebsiteScriptLoader/>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-10 px-4 max-w-3xl">
           <Card className="border-destructive">
             <CardHeader>
               <CardTitle className="text-destructive">Error</CardTitle>
               <CardDescription>{error}</CardDescription>
             </CardHeader>
           </Card>
         </div>
    );
  }

  if (!website) {
    return (
      <div className="container mx-auto py-10 px-4 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Website Not Found</CardTitle>
            <CardDescription>
              The website you&apos;re looking for doesn&apos;t exist.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div>
    <div className="flex items-center">
      <WebsiteDetailInput setFormData={setFormData} setReloadData={()=>getWebsiteAnalytics}></WebsiteDetailInput>
     <ScriptCard website={website}/>
     </div>
      <WebsiteAnalytics websiteInfo = {websiteInfo} loading = {websiteInfoLoading} analyticsType={formData?.analyticsType}/>
     </div>
  );
}