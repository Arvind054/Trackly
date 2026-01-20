import React from 'react'
import type { AnalyticsType } from '@/lib/types'
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3 } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';

type Props = {
    websiteAnalytics: AnalyticsType | undefined,
    loading: any,
}
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

const NoDataMessage = () => (
    <div className='h-48 w-full mt-4 flex flex-col items-center justify-center text-neutral-500'>
        <BarChart3 className='h-10 w-10 mb-2 opacity-50' />
        <p className='text-sm'>No data available</p>
    </div>
);

export default function WebGeoCard({websiteAnalytics, loading}: Props) {
  const hasCountries = websiteAnalytics?.countries && websiteAnalytics.countries.length > 0;
  const hasCities = websiteAnalytics?.cities && websiteAnalytics.cities.length > 0;
  const hasRegions = websiteAnalytics?.regions && websiteAnalytics.regions.length > 0;

  return (
     <div>
               <Card className='bg-neutral-900 border-neutral-800'>
                   <CardContent className='p-5'>
                       <Tabs defaultValue="countries" className="w-full">
                           <TabsList className='bg-neutral-800 border-neutral-700'>
                               <TabsTrigger value="countries" className='data-[state=active]:bg-neutral-700'>Countries</TabsTrigger>
                               <TabsTrigger value="Cities" className='data-[state=active]:bg-neutral-700'>Cities</TabsTrigger>
                               <TabsTrigger value="Regions" className='data-[state=active]:bg-neutral-700'>Regions</TabsTrigger>
                           </TabsList>
                           <TabsContent value="countries">
                               {!hasCountries ? <NoDataMessage /> : (
                               <ChartContainer config={chartConfig} className='h-48 w-full mt-4'>
                                   <BarChart
                                       accessibilityLayer
                                       data={websiteAnalytics?.countries}
                                       layout="vertical"
                                       barSize={20}
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
                                               
                                           />
                                       </Bar>
                                   </BarChart>
                               </ChartContainer>
                               )}
                           </TabsContent>
                           <TabsContent value="Cities">
                                 {!hasCities ? <NoDataMessage /> : (
                                 <ChartContainer config={chartConfig} className='h-48 w-full mt-4'>
                                   <BarChart
                                       accessibilityLayer
                                       data={websiteAnalytics?.cities}
                                       layout="vertical"
                                       barSize={20}
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
                                              
                                           />
                                       </Bar>
                                   </BarChart>
                               </ChartContainer>
                               )}
                           </TabsContent>
                           <TabsContent value="Regions">
                                 {!hasRegions ? <NoDataMessage /> : (
                                 <ChartContainer config={chartConfig} className='h-48 w-full mt-4'>
                                   <BarChart
                                       accessibilityLayer
                                       data={websiteAnalytics?.regions}
                                       layout="vertical"
                                       barSize={20}
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
                                              
                                           />
                                       </Bar>
                                   </BarChart>
                               </ChartContainer>
                               )}
                           </TabsContent>
                       </Tabs>
                   </CardContent>
               </Card>
           </div>
  )
}