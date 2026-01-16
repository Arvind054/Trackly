import React from 'react'
import { Button } from "@/components/ui/button";
import { Globe, ExternalLink, TrendingUp } from "lucide-react";
import Link from 'next/link';
import { Line, LineChart, ResponsiveContainer } from "recharts"
import type { WebsiteInfoType } from "@/lib/types";
type Props  ={
   websiteInfo: WebsiteInfoType
}


const DashboardWebCard = ({ websiteInfo }: Props) => {
  const hourlyData = websiteInfo?.analytics?.hourlyVisitors;
 
  const chartData = hourlyData?.length==1 ? [{...hourlyData[0], hour: Number(hourlyData[0].hour)-1>=0 ?Number(hourlyData[0].hour)-1:0, count:0, hourLabel:`${Number(hourlyData[0].hour)-1} AM/PM`}, hourlyData[0]]:hourlyData;
  const totalVisitors = chartData.reduce((sum, d) => sum + d.count, 0)
 // const trend = ((chartData[chartData.length - 1].count - chartData[0].count) / chartData[0].count * 100).toFixed(1)
  //const isPositive = Number(trend) >= 0
   
  return (
    <div className="group rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-200">
      <div className="p-5 pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/15 transition-colors">
            <Globe className="h-5 w-5 text-emerald-500" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-medium text-white truncate">
              {websiteInfo?.website?.domain?.replace("https://", "").replace("http://", "")}
            </h3>
            <p className="text-xs text-neutral-500 truncate font-mono">
              {websiteInfo?.website?.websiteId}
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 pb-2 flex items-center justify-between">
        <div>
          <p className="text-2xl font-semibold text-white">{websiteInfo?.analytics?.last24hVisitors || 0}</p>
          <p className="text-xs text-neutral-500">Last 24h Visitors</p>
        </div>
        {/*
        <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
          <TrendingUp className={`h-3 w-3 ${!isPositive ? 'rotate-180' : ''}`} />
          {isPositive ? '+' : ''}{trend}%
        </div>
     */}
      </div>

      <div className="h-20 px-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <Line
              dataKey="count"
              type="bump"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 pt-3 border-t border-neutral-800">
        <Link href={`/dashboard/${websiteInfo?.website?.websiteId}`}>
          <Button 
            variant="ghost" 
            className="w-full h-9 flex items-center justify-center gap-2 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all duration-200"
          >
            <ExternalLink className="h-4 w-4" />
            View Analytics
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default DashboardWebCard