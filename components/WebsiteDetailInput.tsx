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
        <div className='flex gap-5'>
            <div className="flex flex-col gap-3">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            id="date"
                            className="w-48 justify-between font-normal"
                        >
                            <CalendarSearchIcon/>
                            {date?.from? (date?.to?(<>{format(date?.from, 'PPP')}-{format(date?.to, 'PPP')}</>):(<>{format(date?.from, 'PPP')}</>)):(<span>Select a Date</span>)}
                            <ChevronDownIcon />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                        <div className='flex justify-between items-center my-3'>
                            <Button variant={'outline'} onClick={handleTodayClick}>Today</Button>
                            <Button variant={'outline'} onClick={handleResetClick}>Reset</Button>
                        </div>
                        <Calendar
                            mode="range"
                            selected={date}
                            captionLayout="dropdown"
                            onSelect={(date) => {
                                handleDateChange(date)
                                setOpen(false)
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
             <div>
                <Select value={analyticsType} onValueChange={(value)=>setAnalyticsType(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Hourly" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="hourly">Hourly</SelectItem>
                            <SelectItem value="daily">Daily</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <Button onClick={()=>setReloadData(true)}> <RefreshCcw/> </Button>
        </div>
    )
}