import React from 'react'
import type { AnalyticsType } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Link2 } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { IMAGE_URL_FOR_DOMAINS } from '@/lib/types';

type Props = {
    websiteAnalytics: AnalyticsType | undefined,
    loading: any,
}
const chartConfig = {
    desktop: {
        label: "Visitors",
        color: "#3b82f6",
    },
    mobile: {
        label: "Mobile",
        color: "#3b82f6",
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

const WebRefCard = ({ websiteAnalytics, loading }: Props) => {
    const hasReferrals = websiteAnalytics?.referrals && websiteAnalytics.referrals.length > 0;
    const hasRefParams = websiteAnalytics?.refParams && websiteAnalytics.refParams.length > 0;

    const BarLabelWithImg = (props: any) => {
        const { x, y, width, height, value } = props;
        const imageUrl = IMAGE_URL_FOR_DOMAINS?.replace('<domain>', value);
        return (
            <g transform={`translate(${x + 8}, ${y + height / 2 - 8})`}>
                <image href={imageUrl} width={16} height={16} />
                <text x={20} y={12} fontSize={11} fill="#e5e5e5">
                    {value}
                </text>
            </g>
        );
    }

    return (
        <Card className='bg-neutral-900 border-neutral-800 h-full'>
            <CardHeader className='pb-3'>
                <div className='flex items-center gap-2'>
                    <div className='p-1.5 rounded-lg bg-blue-500/10'>
                        <Link2 className='h-4 w-4 text-blue-500' />
                    </div>
                    <CardTitle className='text-neutral-100 text-base font-semibold'>Traffic Sources</CardTitle>
                </div>
            </CardHeader>
            <CardContent className='pt-0 pb-4 px-4'>
                <Tabs defaultValue="source" className="w-full">
                        <TabsList className='bg-neutral-800/50 border-neutral-700 p-1 h-auto'>
                            <TabsTrigger value="source" className='text-xs data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400 px-3 py-1.5'>Source</TabsTrigger>
                            <TabsTrigger value="Referral" className='text-xs data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400 px-3 py-1.5'>Referral</TabsTrigger>
                        </TabsList>
                        <TabsContent value="source" className='mt-3'>
                            {!hasReferrals ? <NoDataMessage /> : (
                            <ChartContainer config={chartConfig} className='h-44 w-full'>
                                <BarChart
                                    accessibilityLayer
                                    data={websiteAnalytics?.referrals}
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
                                        fill="#3b82f6"
                                        radius={4}
                                        opacity={0.8}
                                    >
                                        <LabelList
                                            dataKey="domainName"
                                            position="insideLeft"
                                            offset={8}
                                            className="fill-(--color-label)"
                                            fontSize={11}
                                            content={<BarLabelWithImg/>}
                                        />
                                    </Bar>
                                </BarChart>
                            </ChartContainer>
                            )}
                        </TabsContent>
                        <TabsContent value="Referral" className='mt-3'>
                              {!hasRefParams ? <NoDataMessage /> : (
                              <ChartContainer config={chartConfig} className='h-44 w-full'>
                                <BarChart
                                    accessibilityLayer
                                    data={websiteAnalytics?.refParams}
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
                                        fill="#3b82f6"
                                        radius={4}
                                        opacity={0.8}
                                    >
                                        <LabelList
                                            dataKey="name"
                                            position="insideLeft"
                                            offset={8}
                                            className="fill-(--color-label)"
                                            fontSize={11}
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
    )
}

export default WebRefCard;