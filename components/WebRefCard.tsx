import React from 'react'
import type { AnalyticsType } from '@/lib/types'
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3 } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { IMAGE_URL_FOR_DOMAINS } from '@/lib/types';

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

const WebRefCard = ({ websiteAnalytics, loading }: Props) => {
    const hasReferrals = websiteAnalytics?.referrals && websiteAnalytics.referrals.length > 0;
    const hasRefParams = websiteAnalytics?.refParams && websiteAnalytics.refParams.length > 0;

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
            <Card className='bg-neutral-900 border-neutral-800'>
                <CardContent className='p-5'>
                    <Tabs defaultValue="source" className="w-full">
                        <TabsList className='bg-neutral-800 border-neutral-700'>
                            <TabsTrigger value="source" className='data-[state=active]:bg-neutral-700'>Source</TabsTrigger>
                            <TabsTrigger value="Referral" className='data-[state=active]:bg-neutral-700'>Referral</TabsTrigger>
                        </TabsList>
                        <TabsContent value="source">
                            {!hasReferrals ? <NoDataMessage /> : (
                            <ChartContainer config={chartConfig} className='h-48 w-full mt-4'>
                                <BarChart
                                    accessibilityLayer
                                    data={websiteAnalytics?.referrals}
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
                                            content={<BarLabelWithImg/>}
                                        />
                                    </Bar>
                                </BarChart>
                            </ChartContainer>
                            )}
                        </TabsContent>
                        <TabsContent value="Referral">
                              {!hasRefParams ? <NoDataMessage /> : (
                              <ChartContainer config={chartConfig} className='h-48 w-full mt-4'>
                                <BarChart
                                    accessibilityLayer
                                    data={websiteAnalytics?.refParams}
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
                                            content={<BarLabelWithImg/>}
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

export default WebRefCard;