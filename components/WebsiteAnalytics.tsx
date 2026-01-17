import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import type { WebsiteInfoType } from '@/lib/types'
import LabelCount from './LabelCount'
import { Separator } from './ui/separator'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';

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
    <div className='mt-7'>
      <Card>
        <CardContent className='p-5 flex items-center gap-6'>
          <LabelCount title={"Visitors"} info={webAnalytics?.totalVisitors} />
          <Separator orientation='vertical' className='h-12' />
          <LabelCount title={"Total Page Views"} info={webAnalytics?.totalSessions} />
          <Separator orientation='vertical' className='h-12' />
          <LabelCount title={"Total Active Time"} info={Math.floor((webAnalytics?.totalActiveTime || 0) / 60) + " minutes"} />
          <Separator orientation='vertical' className='h-12' />
          <LabelCount title={"Avg Active Time"} info={Math.floor((webAnalytics?.totalActiveTime || 0) / 60) + " minutes"} />
          <Separator orientation='vertical' className='h-12' />
          <LabelCount title={"Live Users"} info={"5"} />
        </CardContent>
        <CardContent className='p-5 mt-5'>
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
              <CartesianGrid vertical={false} />
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