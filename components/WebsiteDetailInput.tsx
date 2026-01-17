"use client";
import React, { useEffect, useState } from 'react'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { CalendarSearchIcon, ChevronDownIcon, RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { DateRange } from 'react-day-picker';
import { format } from 'date-fns';
type Props = {
    setFormData: any,
    setReloadData: any,
}

export default function WebsiteDetailInput({setFormData, setReloadData}: Props) {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<DateRange | undefined>({from:new Date()})
     const [analyticsType, setAnalyticsType] = useState('hourly');
    const handleTodayClick = ()=>{
        setDate({from:new Date()});
    };
    const handleResetClick = ()=>{
        setDate({from:new Date()});
    };
    const handleDateChange = (range?:DateRange)=>{
      if(!range?.from)return ;
      if(!range.to && range.from){
        setDate({from:range.from});
        return ;
      }
      setDate({from: range.from, to: range.to});
    };

    useEffect(()=>{
      setFormData({
        analyticsType:analyticsType,
        fromDate:date?.from,
        toDate:date?.to
      });
    }, [date, analyticsType])
    return (
        <div className='flex flex-wrap items-center gap-3 p-4 bg-neutral-900 rounded-xl border border-neutral-800'>
            <div className="flex flex-col gap-3">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            id="date"
                            className="w-auto min-w-48 justify-between font-normal bg-neutral-800 border-neutral-700 hover:bg-neutral-700 hover:border-emerald-500/50 text-neutral-200"
                        >
                            <CalendarSearchIcon className="h-4 w-4 text-emerald-500"/>
                            <span className="mx-2">
                                {date?.from? (date?.to?(<>{format(date?.from, 'MMM d')}-{format(date?.to, 'MMM d')}</>):(<>{format(date?.from, 'MMM d, yyyy')}</>)):(<span className="text-neutral-400">Select a Date</span>)}
                            </span>
                            <ChevronDownIcon className="h-4 w-4 text-neutral-400" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-3 bg-neutral-900 border-neutral-800" align="start">
                        <div className='flex justify-between items-center gap-2 mb-3'>
                            <Button variant={'outline'} size="sm" className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700" onClick={handleTodayClick}>Today</Button>
                            <Button variant={'outline'} size="sm" className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700" onClick={handleResetClick}>Reset</Button>
                        </div>
                        <Calendar
                            mode="range"
                            selected={date}
                            captionLayout="dropdown"
                            onSelect={(date) => {
                                handleDateChange(date)
                                setOpen(false)
                            }}
                            className="rounded-lg bg-neutral-900 text-neutral-100 [&_.rdp-weekday]:text-neutral-400 [&_.rdp-day]:text-neutral-200 [&_.rdp-day_button]:text-neutral-200 [&_.rdp-day_button:hover]:bg-emerald-500/20 [&_.rdp-day_button:hover]:text-white [&_.rdp-caption_label]:text-neutral-200 [&_.rdp-dropdown]:text-neutral-200 [&_.rdp-button_previous]:text-neutral-300 [&_.rdp-button_next]:text-neutral-300 [&_.rdp-button_previous:hover]:bg-neutral-800 [&_.rdp-button_next:hover]:bg-neutral-800 [&_[data-selected=true]_.rdp-day_button]:bg-emerald-500 [&_[data-selected=true]_.rdp-day_button]:text-white [&_.rdp-range_middle_.rdp-day_button]:bg-emerald-500/30 [&_.rdp-today]:bg-neutral-800 [&_.rdp-outside]:text-neutral-600"
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <div>
                <Select value={analyticsType} onValueChange={(value)=>setAnalyticsType(value)}>
                    <SelectTrigger className="w-[140px] bg-neutral-800 border-neutral-700 hover:border-emerald-500/50 text-neutral-200">
                        <SelectValue placeholder="Hourly" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-neutral-800">
                        <SelectGroup>
                            <SelectItem value="hourly">Hourly</SelectItem>
                            <SelectItem value="daily">Daily</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <Button 
                variant="outline" 
                size="icon"
                className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700 hover:border-emerald-500/50"
                onClick={()=>setReloadData(true)}
            > 
                <RefreshCcw className="h-4 w-4 text-emerald-500"/> 
            </Button>
        </div>
    )
}