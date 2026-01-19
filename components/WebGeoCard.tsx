import React from 'react'
import type { AnalyticsType } from '@/lib/types'
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import Image from 'next/image';

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

export default function ({websiteAnalytics, loading}: Props) {
  return (
     <div>
               <Card>
                   <CardContent className='p-5'>
                       <Tabs defaultValue="source" className="w-full">
                           <TabsList>
                               <TabsTrigger value="countries">Countries</TabsTrigger>
                               <TabsTrigger value="Cities">Cities</TabsTrigger>
                               <TabsTrigger value="Regions">Regions</TabsTrigger>
                           </TabsList>
                           <TabsContent value="countries">
                               <ChartContainer config={chartConfig}>
                                   <BarChart
                                       accessibilityLayer
                                       data={websiteAnalytics?.countries}
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
                                               
                                           />
                                       </Bar>
                                   </BarChart>
                               </ChartContainer>
                           </TabsContent>
                           <TabsContent value="Cities">
                                 <ChartContainer config={chartConfig}>
                                   <BarChart
                                       accessibilityLayer
                                       data={websiteAnalytics?.cities}
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
                                              
                                           />
                                       </Bar>
                                   </BarChart>
                               </ChartContainer>
                           </TabsContent>
                           <TabsContent value="Regions">
                                 <ChartContainer config={chartConfig}>
                                   <BarChart
                                       accessibilityLayer
                                       data={websiteAnalytics?.regions}
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