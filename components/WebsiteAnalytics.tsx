import React from 'react'
import { Card, CardContent } from './ui/card'
import type { WebsiteInfoType } from '@/lib/types'
import LabelCount from './LabelCount'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {AreaChart, Area, XAxis, YAxis } from 'recharts';

type Props = {
  websiteInfo: WebsiteInfoType | null | undefined,
  loading: boolean,
  analyticsType: string
}
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig
export default function WebsiteAnalytics({ websiteInfo, loading, analyticsType}: Props) {
  const webAnalytics = websiteInfo?.analytics;

  return (
    <div className='space-y-4'>
      {/* Stats Cards Grid */}
      <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-4'>
            <LabelCount title={"Visitors"} info={webAnalytics?.totalVisitors} />
          </CardContent>
        </Card>
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-4'>
            <LabelCount title={"Page Views"} info={webAnalytics?.totalSessions} />
          </CardContent>
        </Card>
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-4'>
            <LabelCount title={"Total Active"} info={Math.floor((webAnalytics?.totalActiveTime || 0) / 60) + " min"} />
          </CardContent>
        </Card>
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-4'>
            <LabelCount title={"Avg Active"} info={Math.floor((webAnalytics?.totalActiveTime || 0) / 60) + " min"} />
          </CardContent>
        </Card>
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-4'>
            <LabelCount title={"Live Users"} info={"5"} />
          </CardContent>
        </Card>
      </div>

      {/* Chart Card */}
      <Card className='bg-neutral-900 border-neutral-800'>
        <CardContent className='p-5'>
          <ChartContainer config={chartConfig} className='h-60 w-full'>
            <AreaChart
              accessibilityLayer
              data={analyticsType === 'hourly' ?(webAnalytics?.hourlyVisitors):webAnalytics?.dailyVisitors}
              margin={{
                left: 12,
                right: 12,
                top:12,
                bottom:12
              }}
            >
              <XAxis
                dataKey={analyticsType ==='hourly'?"hourLabel":"date"}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
             <YAxis
             allowDecimals={false}
             tickLine={false}
             axisLine={false}
             width={30}
             />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="count"
                type="monotone"
                fill="#10b981"
                fillOpacity={0.4}
                stroke="#10b981"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}