import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { Card, CardContent, CardHeader } from '../ui/card'

type Props = {}

export default function WebsiteScriptLoader({}: Props) {
  return (
    <div className="min-h-screen bg-neutral-950 py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 mb-8">
          <Skeleton className="h-12 w-12 rounded-xl bg-neutral-800" />
          <div>
            <Skeleton className="h-7 w-48 mb-2 bg-neutral-800" />
            <Skeleton className="h-4 w-32 bg-neutral-800" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Analytics Section */}
          <div className="xl:col-span-3 space-y-6">
            {/* Filter Bar */}
            <Skeleton className="h-14 w-full rounded-xl bg-neutral-800" />
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="bg-neutral-900 border-neutral-800">
                  <CardContent className="p-4">
                    <Skeleton className="h-3 w-16 mb-2 bg-neutral-800" />
                    <Skeleton className="h-6 w-12 bg-neutral-800" />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Chart */}
            <Card className="bg-neutral-900 border-neutral-800">
              <CardContent className="p-5">
                <Skeleton className="h-60 w-full rounded-lg bg-neutral-800" />
              </CardContent>
            </Card>
          </div>

          {/* Script Section */}
          <div className="xl:col-span-1">
            <Card className="bg-neutral-900 border-neutral-800">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <Skeleton className="h-8 w-8 rounded-lg bg-neutral-800" />
                  <Skeleton className="h-5 w-24 bg-neutral-800" />
                </div>
                <Skeleton className="h-3 w-full bg-neutral-800" />
              </CardHeader>
              <CardContent className="pt-0">
                <Skeleton className="h-32 w-full rounded-lg bg-neutral-800" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}