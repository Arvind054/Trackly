"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Globe, ExternalLink } from "lucide-react";
import DashboardWebCard from '../../components/DashboardWebCard';
import Link from 'next/link';
// Dummy data for websites
const dummyWebsites = [
  { id: 1, name: "My Portfolio", url: "https://myportfolio.com" },
  { id: 2, name: "E-commerce Store", url: "https://mystore.com" },
  { id: 3, name: "Blog Website", url: "https://myblog.com" },
];

const DashboardPage = () => {
  const [websiteList, setWebsiteList] = useState(dummyWebsites);

  // Use empty array to test empty state: useState([]);

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
              <DashboardWebCard website = {website} key={website.url}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
