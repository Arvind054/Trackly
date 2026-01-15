import React from 'react'
import { Button } from "@/components/ui/button";
import { Globe, ExternalLink, TrendingUp } from "lucide-react";
import Link from 'next/link';
import { Area, AreaChart, ResponsiveContainer } from "recharts"

type Props = {
  website: {
    id: number,
    domain: string,
    websiteId: string,
  }
}

// Sample chart data - replace with real data
const chartData = [
  { day: "Mon", visitors: 120 },
  { day: "Tue", visitors: 180 },
  { day: "Wed", visitors: 150 },
  { day: "Thu", visitors: 220 },
  { day: "Fri", visitors: 280 },
  { day: "Sat", visitors: 190 },
  { day: "Sun", visitors: 240 },
]

const DashboardWebCard = ({ website }: Props) => {
  const totalVisitors = chartData.reduce((sum, d) => sum + d.visitors, 0)
  const trend = ((chartData[chartData.length - 1].visitors - chartData[0].visitors) / chartData[0].visitors * 100).toFixed(1)
  const isPositive = Number(trend) >= 0

  return (
    <div className="group rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-200">
      <div className="p-5 pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/15 transition-colors">
            <Globe className="h-5 w-5 text-emerald-500" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-medium text-white truncate">
              {website?.domain?.replace("https://", "").replace("http://", "")}
            </h3>
            <p className="text-xs text-neutral-500 truncate font-mono">
              {website.websiteId}
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 pb-2 flex items-center justify-between">
        <div>
          <p className="text-2xl font-semibold text-white">{totalVisitors.toLocaleString()}</p>
          <p className="text-xs text-neutral-500">Total visitors (7d)</p>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
          <TrendingUp className={`h-3 w-3 ${!isPositive ? 'rotate-180' : ''}`} />
          {isPositive ? '+' : ''}{trend}%
        </div>
      </div>

      <div className="h-20 px-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <defs>
              <linearGradient id={`gradient-${website.websiteId}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              dataKey="visitors"
              type="monotone"
              fill={`url(#gradient-${website.websiteId})`}
              stroke="#10b981"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 pt-3 border-t border-neutral-800">
        <Link href={`/dashboard/${website.websiteId}`}>
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