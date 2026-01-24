"use client"

import Image from 'next/image'
import logo from "../src/logo.png"

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
    { month: "January", desktop: 186, mobile: 80, total: 266 },
    { month: "February", desktop: 305, mobile: 200, total: 505 },
    { month: "March", desktop: 237, mobile: 120, total: 357 },
    { month: "April", desktop: 73, mobile: 190, total: 263 },
    { month: "May", desktop: 209, mobile: 130, total: 339 },
    { month: "June", desktop: 214, mobile: 140, total: 354 },
    { month: "July", desktop: 230, mobile: 160, total: 390 },
    { month: "August", desktop: 305, mobile: 200, total: 505 },
    { month: "September", desktop: 207, mobile: 102, total: 309 },
    { month: "October", desktop: 75, mobile: 162, total: 237 },
    { month: "November", desktop: 189, mobile: 156, total: 345 },
    { month: "December", desktop: 214, mobile: 140, total: 354 },
]

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
    let total = 0;
    if (selectedData.length > 0) {
        total = selectedData[0].total
    }

    return (

        <Card id="card" className="flex rounded-3xl overflow-hidden border-none shadow-white/30 shadow-def w-[960px] h-[472px] pb-8">
            {/****************** right menu ************************/}
            <CardFooter className="py-2 px-4 flex flex-col gap-10 bg-[#02030D] h-[472px] z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="grey" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1" /></svg>
                <ul className="flex flex-col gap-8">
                    <li className="p-1 bg-violet-700 rounded-lg shadow-def shadow-violet-700/80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" /><path strokeLinecap="round" strokeLinejoin="round" d="m7 14l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10m0 0v2.5m0-2.5h-2.5" /></g></svg></li>
                    <li className="p-1 bg-purple-700 rounded-lg shadow-def shadow-purple-700/80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeWidth="1.5"><path d="M12 2c5.523 0 10 4.477 10 10c0 1.821-.487 3.53-1.338 5M5 4.859A9.97 9.97 0 0 0 2 12c0 5.523 4.477 10 10 10c1.821 0 3.53-.487 5-1.338" /><path d="M5 12c0 1.487.464 2.866 1.255 4M12 5a7 7 0 1 1-3 13.326" /><path d="M12 16a4 4 0 0 0 0-8" /></g></svg></li>
                    <li className="p-1 bg-fuchsia-600 rounded-lg shadow-def shadow-fuchsia-600/80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2zm2 2H5V5h14v14.1M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2" /></svg></li>
                </ul>
                <ul className="flex flex-col">
                    <li className="p-3 rounded-lg border-none shadow-white/30 shadow-def"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="white" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L6.04 7.5L12 10.85l5.96-3.35zM5 15.91l6 3.38v-6.71L5 9.21zm14 0v-6.7l-6 3.37v6.71z" /></svg></li>
                    <li className="px-3 py-2 hover:py-3 rounded-lg border-none hover:shadow-white/30 hover:shadow-def group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" >
                            <path className="fill-white/30 group-hover:fill-white duration-300" fill="none" d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07m12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32M9 5h2v6H9zm0 8h2v2H9z" />
                        </svg>
                    </li>
                    <li className="px-3 py-2 hover:py-3 rounded-lg border-none hover:shadow-white/30 hover:shadow-def group"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path className="fill-white/30 group-hover:fill-white duration-300" fill="dimgrey" d="M230.91 172a8 8 0 0 1-2.91 10.91l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 36 169.09l92 53.65l92-53.65a8 8 0 0 1 10.91 2.91M220 121.09l-92 53.65l-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82M24 80a8 8 0 0 1 4-6.91l96-56a8 8 0 0 1 8.06 0l96 56a8 8 0 0 1 0 13.82l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 24 80m23.88 0L128 126.74L208.12 80L128 33.26Z" /></svg></li>
                    <li className="px-3 py-2 hover:py-3 rounded-lg border-none hover:shadow-white/30 hover:shadow-def group"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path className="fill-white/30 group-hover:fill-white duration-300" fill="dimgrey" d="M208 136H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16m0 56H48v-40h160zm0-144H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 56H48V64h160z" /></svg></li>
                    <li className="px-3 py-2 hover:py-3 rounded-lg border-none hover:shadow-white/30 hover:shadow-def group"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path className="fill-white/30 group-hover:fill-white duration-300" fill="dimgrey" d="M6.25 2A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V4.25A2.25 2.25 0 0 0 17.75 2zM5.5 4.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75zM7.75 6.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM7 16.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75M7.75 11a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z" /></svg></li>


                </ul>
            </CardFooter>
            <div className="w-full h-full tracking-tighter">
                <CardHeader className='p-0 bg-black shadow-[0px_-2px_20px_0px_rgba(255,255,255,0.2)]'>
                    <Menubar className='pl-3'>
                        <MenubarMenu>
                            <MenubarTrigger className="text-xs relative">Dashboard <span className="top-[35px] left-1/2 -translate-x-1/2 absolute w-8 h-[2px] bg-violet-700"></span></MenubarTrigger>
                            <MenubarTrigger className="text-xs relative text-white/50 hover:text-white border-b-2 border-transparent group">
                                Digital tokens
                                <span className="top-[35px] left-1/2 -translate-x-1/2 absolute w-0 h-[2px] group-hover:bg-violet-700 group-hover:w-8 duration-500"></span>
                            </MenubarTrigger>
                            <MenubarTrigger className="text-xs relative text-white/50 hover:text-white border-b-2 border-transparent group">
                                Analytics
                                <span className="top-[35px] left-1/2 -translate-x-1/2 absolute w-0 h-[2px] group-hover:bg-violet-700 group-hover:w-8 duration-500"></span>
                            </MenubarTrigger> </MenubarMenu>
                    </Menubar>
                </CardHeader>
                <CardDescription className='h-1/4 pl-6'>
                    <div className="flex justify-between h-full">
                        <div className='flex flex-col justify-center gap-2'>
                            <p className='text-violet-700 text-xs flex gap-4 items-center'>DASHBOARD <span className='text-white/50 text-lg'>&gt;</span><span className='text-white/50'>Vaultflow</span></p>
                            <CardTitle className="flex gap-3 text-white font-normal tracking-tighter size-8  items-center"> <Image className="p-2 bg-violet-700 rounded-lg" alt="" src={logo} />Vaultflow <span className="px-2.5 rounded-full border-none shadow-white/30 shadow-def text-4xl font-light text-white/80">+</span></CardTitle>
                        </div>
                        <div className="w-1/3 flex items-center justify-between">
                            <div className='flex w-1/2 flex-col text-[8px] text-white'>
                                <p className="flex items-center gap-2">Active users<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 20 20"><path fill="dimgrey" d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07m12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32M9 5h2v6H9zm0 8h2v2H9z" /></svg></p>
                                <div className='flex gap-1'>
                                    {selectedData ? (<p>{selectedData[0].desktop} </p>) : (<p></p>)}<p className='text-white/50'>  total</p>
                                </div>
                                <ChartContainer className="w-full h-[16px] p-0 m-0" config={chartConfig}>
                                    <BarChart
                                        accessibilityLayer
                                        data={selectedData}
                                        layout="vertical"
                                        margin={{
                                            left: 0,
                                            top: 0
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
                                            stackId="a"
                                            fill="var(--color-mobile)"
                                            background={{ fill: "var(--color-desktop)" }}
                                            radius={[4, 0, 0, 4]}
                                        />
                                        <Bar
                                            dataKey="total"
                                            stackId="c"
                                            fill="none"
                                            radius={[0, 4, 4, 0]}
                                        />
                                    </BarChart>
                                </ChartContainer>
                                <div className='flex gap-1'>
                                    {selectedData ? (<p>{selectedData[0].mobile} </p>) : (<p></p>)}<p className='text-white/50'>  total</p>
                                </div>
                                <ChartContainer className="w-full h-[16px] p-0 m-0" config={chartConfig}>
                                    <BarChart
                                        accessibilityLayer
                                        data={selectedData}
                                        layout="vertical"
                                        margin={{
                                            left: 0,
                                            top: 0
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
                                            dataKey="mobile"
                                            stackId="b"
                                            fill="var(--color-mobile2)"
                                            background={{ fill: "var(--color-desktop)" }}
                                            radius={[4, 0, 0, 4]}
                                        />
                                        <Bar
                                            dataKey="total"
                                            stackId="c"
                                            fill="none"
                                            radius={[0, 4, 4, 0]}
                                        />
                                    </BarChart>
                                </ChartContainer>
                            </div>
                            <ChartContainer
                                config={chartConfig}
                                className="w-1/2 p-0 m-0"
                            >
                                <RadialBarChart
                                    data={selectedData}
                                    endAngle={360}
                                    innerRadius={45}
                                    outerRadius={25}
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
                                                            dominantBaseline="text-before-edge"
                                                        >
                                                            <tspan
                                                                x={viewBox.cx}
                                                                y={viewBox.cy}
                                                                className="fill-foreground text-sm font-bold"
                                                            >
                                                                {total.toLocaleString()}
                                                            </tspan>
                                                            <tspan
                                                                x={viewBox.cx}
                                                                y={(viewBox.cy || 0) + 10}
                                                                className="fill-muted-foreground text-[8px]"
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
                    </div>
                </CardDescription>
                <CardContent className='h-2/3'>
                    <div className='flex justify-between mb-2'>
                        <p className="flex items-center gap-3 text-base">Total visits <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20"><path fill="dimgrey" d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07m12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32M9 5h2v6H9zm0 8h2v2H9z" /></svg></p>
                        <div className="flex justify-end">
                            <Select onValueChange={handleMonthChange} defaultValue='January'>
                                <SelectTrigger className="w-[120px] h-8 rounded border border-white/20 text-sm">
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

                    <ChartContainer config={chartConfig} className="h-full w-full">
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
                                stackId="a"
                                strokeWidth={4}
                            />
                            <Area dataKey="desktop"
                                type="natural"
                                fill="var(--color-desktop)"
                                fillOpacity={0}
                                stroke="var(--color-desktop)"
                                stackId="a"
                                strokeWidth={4} />
                        </AreaChart>
                    </ChartContainer></CardContent>
            </div >

        </Card >



    )
}