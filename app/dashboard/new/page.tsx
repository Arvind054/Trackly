import React from 'react'
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe } from 'lucide-react'
import WebsiteForm from '@/components/WebsiteForm';
import Link from 'next/link';

type Props = {}

const page = (props: Props) => {
  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 py-10">
        {/* Back Button */}
        <Link href="/dashboard">
          <Button 
            variant="ghost" 
            className="mb-8 text-neutral-400 hover:text-white hover:bg-neutral-800 -ml-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <Globe className="h-6 w-6 text-emerald-500" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Add New Website
            </h1>
          </div>
          <p className="text-neutral-500 text-sm">
            Enter your website details below to start tracking analytics
          </p>
        </div>

        {/* Form Card */}
        <WebsiteForm />
      </div>
    </div>
  )
}

export default page