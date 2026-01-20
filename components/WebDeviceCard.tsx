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

export default function WebDeviceCard({websiteAnalytics, loading}: Props) {
  const hasDevices = websiteAnalytics?.devices && websiteAnalytics.devices.length > 0;
  const hasOS = websiteAnalytics?.os && websiteAnalytics.os.length > 0;
  const hasBrowsers = websiteAnalytics?.browsers && websiteAnalytics.browsers.length > 0;

  return (
     <div>
               <Card className='bg-neutral-900 border-neutral-800'>
                   <CardContent className='p-5'>
                       <Tabs defaultValue="devices" className="w-full">
                           <TabsList className='bg-neutral-800 border-neutral-700'>
                               <TabsTrigger value="devices" className='data-[state=active]:bg-neutral-700'>Devices</TabsTrigger>
                               <TabsTrigger value="os" className='data-[state=active]:bg-neutral-700'>OS</TabsTrigger>
                               <TabsTrigger value="browsers" className='data-[state=active]:bg-neutral-700'>Browsers</TabsTrigger>
                           </TabsList>
                           <TabsContent value="devices">
                               {!hasDevices ? <NoDataMessage /> : (
                               <ChartContainer config={chartConfig} className='h-48 w-full mt-4'>
                                   <BarChart
                                       accessibilityLayer
                                       data={websiteAnalytics?.devices}
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
                           <TabsContent value="os">
                                 {!hasOS ? <NoDataMessage /> : (
                                 <ChartContainer config={chartConfig} className='h-48 w-full mt-4'>
                                   <BarChart
                                       accessibilityLayer
                                       data={websiteAnalytics?.os}
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
                           <TabsContent value="browsers">
                                 {!hasBrowsers ? <NoDataMessage /> : (
                                 <ChartContainer config={chartConfig} className='h-48 w-full mt-4'>
                                   <BarChart
                                       accessibilityLayer
                                       data={websiteAnalytics?.browsers}
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