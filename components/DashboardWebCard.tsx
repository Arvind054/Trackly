import React from 'react'
import { Button } from "@/components/ui/button";
import { Globe, BarChart3 } from "lucide-react";
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
    <div className="group rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden hover:border-emerald-500/30 hover:bg-neutral-900 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5">
      <div className="p-5 pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/20 group-hover:from-emerald-500/30 group-hover:to-emerald-600/20 transition-all duration-300">
            <Globe className="h-5 w-5 text-emerald-500" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-white truncate group-hover:text-emerald-50 transition-colors">
              {websiteInfo?.website?.domain?.replace("https://", "").replace("http://", "")}
            </h3>
            <p className="text-xs text-neutral-500 truncate font-mono">
              {websiteInfo?.website?.websiteId?.slice(0, 8)}...
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 pb-2 flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold text-white">{websiteInfo?.analytics?.totalVisitors || 0}</p>
          <p className="text-xs text-neutral-500">Visitors Today</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-neutral-300">{websiteInfo?.analytics?.totalSessions || 0}</p>
          <p className="text-xs text-neutral-500">Page Views</p>
        </div>
      </div>

      <div className="h-16 px-2 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <Line
              dataKey="count"
              type="monotone"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 pt-3 border-t border-neutral-800/50">
        <Link href={`/dashboard/website/${websiteInfo?.website?.websiteId}`}>
          <Button 
            variant="ghost" 
            className="w-full h-10 flex items-center justify-center gap-2 text-neutral-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200 rounded-lg"
          >
            <BarChart3 className="h-4 w-4" />
            View Analytics
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default DashboardWebCard