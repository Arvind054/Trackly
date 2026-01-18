import React from 'react'
import type { AnalyticsType } from '@/lib/types'
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import Image from 'next/image';
import { IMAGE_URL_FOR_DOMAINS } from '@/lib/types';
type Props = {
    websiteAnalytics: AnalyticsType | undefined,
    loading: any,
}
const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-2)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
    label: {
        color: "var(--background)",
    },
} satisfies ChartConfig
const WebRefCard = ({ websiteAnalytics, loading }: Props) => {
    const BarLabelWithImg = (props: any)=>{
     const { x, y, width, height, value } = props;

  const imageUrl = IMAGE_URL_FOR_DOMAINS?.replace('<domain>', value);

  return (
    <g transform={`translate(${x + 8}, ${y + height / 2 - 8})`}>
      {/* SVG image */}
      <image href={imageUrl} width={16} height={16} />
      {/* SVG text */}
      <text x={20} y={12} fontSize={12} fill="#ffffff">
        {value}
      </text>
    </g>
  );
    }
    return (
        <div>
            <Card>
                <CardContent className='p-5'>
                    <Tabs defaultValue="source" className="w-full">
                        <TabsList>
                            <TabsTrigger value="source">Source</TabsTrigger>
                            <TabsTrigger value="Referral">Referral</TabsTrigger>
                        </TabsList>
                        <TabsContent value="source">
                            <ChartContainer config={chartConfig}>
                                <BarChart
                                    accessibilityLayer
                                    data={websiteAnalytics?.referrals}
                                    layout="vertical"
                                    margin={{
                                        right: 16,
                                    }}
                                >
                                    <CartesianGrid horizontal={false} />
                                    <YAxis
                                        dataKey="domainName"
                                        type="category"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                        hide
                                    />
                                    <XAxis dataKey="uv" type="number" hide />
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent indicator="line" />}
                                    />
                                    <Bar
                                        dataKey="uv"
                                        layout="vertical"
                                        fill="var(--color-desktop)"
                                        radius={4}
                                    >
                                        <LabelList
                                            dataKey="domainName"
                                            position="insideLeft"
                                            offset={8}
                                            className="fill-(--color-label)"
                                            fontSize={12}
                                            content={<BarLabelWithImg/>}
                                        />
                                    </Bar>
                                </BarChart>
                            </ChartContainer>
                        </TabsContent>
                        <TabsContent value="Referral">
                              <ChartContainer config={chartConfig}>
                                <BarChart
                                    accessibilityLayer
                                    data={websiteAnalytics?.refParams}
                                    layout="vertical"
                                    margin={{
                                        right: 16,
                                    }}
                                >
                                    <CartesianGrid horizontal={false} />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                        hide
                                    />
                                    <XAxis dataKey="uv" type="number" hide />
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent indicator="line" />}
                                    />
                                    <Bar
                                        dataKey="uv"
                                        layout="vertical"
                                        fill="var(--color-desktop)"
                                        radius={4}
                                    >
                                        <LabelList
                                            dataKey="name"
                                            position="insideLeft"
                                            offset={8}
                                            className="fill-(--color-label)"
                                            fontSize={12}
                                            content={<BarLabelWithImg/>}
                                        />
                                    </Bar>
                                </BarChart>
                            </ChartContainer>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    )
}

export default WebRefCard;