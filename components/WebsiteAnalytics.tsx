import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import type { LiveUserType, WebsiteInfoType } from '@/lib/types'
import LabelCount from './LabelCount'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { TrendingUp, Users, Eye, Clock, Activity, Zap } from 'lucide-react';

type Props = {
  websiteInfo: WebsiteInfoType | null | undefined,
  loading: boolean,
  analyticsType: string,
  liveUserCount: any
}
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig
export default function WebsiteAnalytics({ websiteInfo, loading, analyticsType, liveUserCount}: Props) {
  const webAnalytics = websiteInfo?.analytics;

  // Format time for hourly display
  const formatTimeLabel = (value: string, isHourly: boolean) => {
    if (isHourly) {
      // For hourly data, show full time like "12 AM", "1 PM", etc.
      return value;
    }
    // For daily data, show abbreviated day like "Mon", "Tue", etc.
    return value?.slice(0, 3);
  };

  return (
    <div className='space-y-6'>
      {/* Stats Cards Grid */}
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-5'>
            <div className='flex items-center gap-4'>
              <div className='p-3 rounded-xl bg-emerald-500/10'>
                <Users className='h-5 w-5 text-emerald-500' />
              </div>
              <LabelCount title={"Visitors"} info={webAnalytics?.totalVisitors} />
            </div>
          </CardContent>
        </Card>
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-5'>
            <div className='flex items-center gap-4'>
              <div className='p-3 rounded-xl bg-blue-500/10'>
                <Eye className='h-5 w-5 text-blue-500' />
              </div>
              <LabelCount title={"Page Views"} info={webAnalytics?.totalSessions} />
            </div>
          </CardContent>
        </Card>
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-5'>
            <div className='flex items-center gap-4'>
              <div className='p-3 rounded-xl bg-purple-500/10'>
                <Clock className='h-5 w-5 text-purple-500' />
              </div>
              <LabelCount title={"Total Active"} info={Math.floor((webAnalytics?.totalActiveTime || 0) / 60) + " min"} />
            </div>
          </CardContent>
        </Card>
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-5'>
            <div className='flex items-center gap-4'>
              <div className='p-3 rounded-xl bg-orange-500/10'>
                <Activity className='h-5 w-5 text-orange-500' />
              </div>
              <LabelCount title={"Avg Active"} info={Math.floor((webAnalytics?.totalActiveTime || 0) / 60) + " min"} />
            </div>
          </CardContent>
        </Card>
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-5'>
            <div className='flex items-center gap-4'>
              <div className='p-3 rounded-xl bg-green-500/10'>
                <Zap className='h-5 w-5 text-green-500' />
              </div>
              <LabelCount title={"Live Users"} info={liveUserCount} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart Card */}
      <Card className='bg-neutral-900 border-neutral-800'>
        <CardHeader className='pb-2'>
          <div className='flex items-center gap-2'>
            <TrendingUp className='h-5 w-5 text-emerald-500' />
            <CardTitle className='text-neutral-100 text-lg font-semibold'>
              {analyticsType === 'hourly' ? 'Hourly Visitors' : 'Daily Visitors'}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className='pt-0 pb-5 px-5'>
          <ChartContainer config={chartConfig} className='h-64 w-full'>
            <AreaChart
              accessibilityLayer
              data={analyticsType === 'hourly' ? (webAnalytics?.hourlyVisitors) : webAnalytics?.dailyVisitors}
              margin={{
                left: 8,
                right: 8,
                top: 16,
                bottom: 8
              }}
            >
              <defs>
                <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
              <XAxis
                dataKey={analyticsType === 'hourly' ? "hourLabel" : "date"}
                tickLine={false}
                axisLine={false}
                tickMargin={12}
                tick={{ fill: '#a3a3a3', fontSize: 12 }}
                tickFormatter={(value) => formatTimeLabel(value, analyticsType === 'hourly')}
              />
              <YAxis
                allowDecimals={false}
                tickLine={false}
                axisLine={false}
                width={35}
                tick={{ fill: '#a3a3a3', fontSize: 12 }}
              />
              <ChartTooltip
                cursor={{ stroke: '#10b981', strokeWidth: 1, strokeDasharray: '4 4' }}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="count"
                type="monotone"
                fill="url(#colorVisitors)"
                stroke="#10b981"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}