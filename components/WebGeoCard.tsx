import React from 'react'
import type { AnalyticsType } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Globe } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';

type Props = {
    websiteAnalytics: AnalyticsType | undefined,
    loading: any,
}
const chartConfig = {
    desktop: {
        label: "Visitors",
        color: "#8b5cf6",
    },
    mobile: {
        label: "Mobile",
        color: "#8b5cf6",
    },
    label: {
        color: "var(--background)",
    },
} satisfies ChartConfig

const NoDataMessage = () => (
    <div className='h-44 w-full flex flex-col items-center justify-center text-neutral-500'>
        <BarChart3 className='h-8 w-8 mb-2 opacity-40' />
        <p className='text-xs'>No data available</p>
    </div>
);

export default function WebGeoCard({websiteAnalytics, loading}: Props) {
  const hasCountries = websiteAnalytics?.countries && websiteAnalytics.countries.length > 0;
  const hasCities = websiteAnalytics?.cities && websiteAnalytics.cities.length > 0;
  const hasRegions = websiteAnalytics?.regions && websiteAnalytics.regions.length > 0;

  return (
    <Card className='bg-neutral-900 border-neutral-800 h-full'>
        <CardHeader className='pb-3'>
            <div className='flex items-center gap-2'>
                <div className='p-1.5 rounded-lg bg-purple-500/10'>
                    <Globe className='h-4 w-4 text-purple-500' />
                </div>
                <CardTitle className='text-neutral-100 text-base font-semibold'>Geographic Data</CardTitle>
            </div>
        </CardHeader>
        <CardContent className='pt-0 pb-4 px-4'>
            <Tabs defaultValue="countries" className="w-full">
                <TabsList className='bg-neutral-800/50 border-neutral-700 p-1 h-auto'>
                    <TabsTrigger value="countries" className='text-xs data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 px-3 py-1.5'>Countries</TabsTrigger>
                    <TabsTrigger value="Cities" className='text-xs data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 px-3 py-1.5'>Cities</TabsTrigger>
                    <TabsTrigger value="Regions" className='text-xs data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 px-3 py-1.5'>Regions</TabsTrigger>
                </TabsList>
                <TabsContent value="countries" className='mt-3'>
                    {!hasCountries ? <NoDataMessage /> : (
                    <ChartContainer config={chartConfig} className='h-44 w-full'>
                        <BarChart
                            accessibilityLayer
                            data={websiteAnalytics?.countries}
                            layout="vertical"
                            barSize={18}
                            margin={{
                                right: 12,
                                left: 0,
                            }}
                        >
                            <CartesianGrid horizontal={false} stroke="#262626" strokeDasharray="3 3" />
                            <YAxis
                                dataKey="domainName"
                                type="category"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
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
                                fill="#8b5cf6"
                                radius={4}
                                opacity={0.8}
                            >
                                <LabelList
                                    dataKey="domainName"
                                    position="insideLeft"
                                    offset={8}
                                    className="fill-white"
                                    fontSize={11}
                                />
                            </Bar>
                        </BarChart>
                    </ChartContainer>
                    )}
                </TabsContent>
                <TabsContent value="Cities" className='mt-3'>
                    {!hasCities ? <NoDataMessage /> : (
                    <ChartContainer config={chartConfig} className='h-44 w-full'>
                        <BarChart
                            accessibilityLayer
                            data={websiteAnalytics?.cities}
                            layout="vertical"
                            barSize={18}
                            margin={{
                                right: 12,
                                left: 0,
                            }}
                        >
                            <CartesianGrid horizontal={false} stroke="#262626" strokeDasharray="3 3" />
                            <YAxis
                                dataKey="name"
                                type="category"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
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
                                fill="#8b5cf6"
                                radius={4}
                                opacity={0.8}
                            >
                                <LabelList
                                    dataKey="name"
                                    position="insideLeft"
                                    offset={8}
                                    className="fill-white"
                                    fontSize={11}
                                />
                            </Bar>
                        </BarChart>
                    </ChartContainer>
                    )}
                </TabsContent>
                <TabsContent value="Regions" className='mt-3'>
                    {!hasRegions ? <NoDataMessage /> : (
                    <ChartContainer config={chartConfig} className='h-44 w-full'>
                        <BarChart
                            accessibilityLayer
                            data={websiteAnalytics?.regions}
                            layout="vertical"
                            barSize={18}
                            margin={{
                                right: 12,
                                left: 0,
                            }}
                        >
                            <CartesianGrid horizontal={false} stroke="#262626" strokeDasharray="3 3" />
                            <YAxis
                                dataKey="name"
                                type="category"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
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
                                fill="#8b5cf6"
                                radius={4}
                                opacity={0.8}
                            >
                                <LabelList
                                    dataKey="name"
                                    position="insideLeft"
                                    offset={8}
                                    className="fill-white"
                                    fontSize={11}
                                />
                            </Bar>
                        </BarChart>
                    </ChartContainer>
                    )}
                </TabsContent>
            </Tabs>
        </CardContent>
    </Card>
  )
}