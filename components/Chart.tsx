"use client"

import { useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { LabelList, Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart, BarChart, Bar, Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"


const chartData = [
    {
        month: "January",
        desktop: 186, mobile: 80
    },
    {
        month: "February",
        desktop: 305, mobile: 200

    },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]
let totalDesktop = 0;
let totalMobile = 0;

chartData.forEach(data => {
    totalDesktop += data.desktop;
    totalMobile += data.mobile;
});

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
    mobile2: {
        label: "Mobile",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig

export function Chart() {

    const [month, setMonth] = useState('January')
    const handleMonthChange = (value: string) => {
        setMonth(value);
    };

    const selectedData = chartData.filter(data => data.month === month)
    let total = 15

    return (

        <Card className="flex rounded-3xl border-none shadow-white/30 shadow-md w-[960px] h-[472px]">
            <CardFooter>
                <ul className="flex flex-col gap-8">
                    <li>O</li>
                    <li>O</li>
                    <li>O</li>
                    <li>O</li>
                </ul>
            </CardFooter>
            <div className="w-full">
                <CardHeader>
                    <Menubar>
                        <MenubarMenu><MenubarTrigger className="border-b">Dashboard</MenubarTrigger>
                            <MenubarTrigger className="text-white/50 hover:text-white hover:border-b duration-300">Digital tokens</MenubarTrigger>
                            <MenubarTrigger className="text-white/50 hover:text-white hover:border-b duration-300">Analytics</MenubarTrigger></MenubarMenu>
                    </Menubar>
                </CardHeader>


                <CardDescription>
                    <div className="flex justify-between">
                        <CardTitle className="text-white">Vaultflow</CardTitle>
                        <div className="w-1/3">
                            <div className="flex justify-between gap-4 items-center">
                                <ChartContainer className="max-w-1/2 h-[40px]" config={chartConfig}>
                                    <BarChart
                                        accessibilityLayer
                                        data={selectedData}
                                        layout="vertical"
                                        margin={{
                                            left: 10,
                                        }}
                                    >
                                        <YAxis
                                            dataKey="month"
                                            type="category"
                                            tickLine={false}
                                            tickMargin={10}
                                            axisLine={false}
                                            hide
                                        />
                                        <XAxis type="number" hide />
                                        <Bar
                                            dataKey="desktop"
                                            layout="vertical"
                                            fill="var(--color-mobile)"
                                            radius={4}
                                        >
                                            <LabelList
                                                dataKey="month"
                                                position="insideLeft"
                                                offset={8}
                                                className="fill-[--color-label]"
                                                fontSize={12}
                                            />
                                            <LabelList
                                                dataKey="desktop"
                                                position="right"
                                                offset={8}
                                                className="fill-foreground"
                                                fontSize={12}
                                            />
                                        </Bar>
                                        <Bar
                                            dataKey="mobile"
                                            layout="vertical"
                                            fill="var(--color-mobile2)"
                                            radius={4}
                                        >
                                            <LabelList
                                                dataKey="month"
                                                position="insideLeft"
                                                offset={8}
                                                className="fill-[--color-label]"
                                                fontSize={12}
                                            />
                                            <LabelList
                                                dataKey="mobile"
                                                position="right"
                                                offset={8}
                                                className="fill-foreground"
                                                fontSize={12}
                                            />
                                        </Bar>
                                    </BarChart>
                                </ChartContainer>

                                <ChartContainer
                                    config={chartConfig}
                                    className="mx-auto aspect-square w-1/2 max-w-[250px]"
                                >
                                    <RadialBarChart
                                        data={selectedData}
                                        endAngle={360}
                                        innerRadius={40}
                                        outerRadius={20}
                                    >
                                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                            <Label
                                                content={({ viewBox }) => {
                                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                        return (
                                                            <text
                                                                x={viewBox.cx}
                                                                y={viewBox.cy}
                                                                textAnchor="middle"
                                                                dominantBaseline="top"
                                                            >
                                                                <tspan
                                                                    x={viewBox.cx}
                                                                    y={viewBox.cy}
                                                                    className="fill-foreground text-base font-bold"
                                                                >
                                                                    {total.toLocaleString()}
                                                                </tspan>
                                                                <tspan
                                                                    x={viewBox.cx}
                                                                    y={(viewBox.cy || 0) + 24}
                                                                    className="fill-muted-foreground text-xxs"
                                                                >
                                                                    Visitors
                                                                </tspan>
                                                            </text>
                                                        )
                                                    }
                                                }}
                                            />
                                        </PolarRadiusAxis>
                                        <RadialBar
                                            dataKey="desktop"
                                            stackId="a"
                                            cornerRadius={5}
                                            fill="var(--color-mobile)"
                                            className="stroke-transparent stroke-2"
                                        />
                                        <RadialBar
                                            dataKey="mobile"
                                            fill="var(--color-mobile2)"
                                            stackId="a"
                                            cornerRadius={5}
                                            className="stroke-transparent stroke-2"
                                        />
                                    </RadialBarChart>
                                </ChartContainer>
                            </div>
                            <div className="flex justify-end">
                                <Select onValueChange={handleMonthChange} defaultValue='January'>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {chartData.map((data) => (
                                            <SelectItem key={data.month} value={data.month}>{data.month}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </CardDescription>


                <CardContent>
                    <p>Total visits</p>
                    <ChartContainer config={chartConfig} className="h-[200px] w-full">
                        <AreaChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <defs>
                                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-desktop)"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-desktop)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-mobile)"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-mobile)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={true}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={36}
                                tickCount={4}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Area dataKey="mobile"
                                type="natural"
                                fill="url(#fillMobile)"
                                fillOpacity={0.4}
                                stroke="var(--color-mobile)"
                                stackId="a" />
                            <Area dataKey="desktop"
                                type="natural"
                                fill="var(--color-desktop)"
                                fillOpacity={0}
                                stroke="var(--color-desktop)"
                                stackId="a" />
                        </AreaChart>
                    </ChartContainer></CardContent>
            </div>

        </Card >



    )
}