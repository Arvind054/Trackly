"use client"
import React, { useState } from 'react'
import { Globe, Clock, Server, Plus, Loader2Icon } from 'lucide-react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useRouter } from 'next/navigation';
type Props = {}

const WebsiteForm = (props: Props) => {
  const router = useRouter();
  const [domain, setDomain] = useState('');
  const [timeZone, setTimeZone] = useState('ist');
  const [enabledLocalhostTracking, setEnabledLocalhostTracking] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async(e: any) => {
    e.preventDefault();
    if(domain.trim() === '' || timeZone.trim()==='' ){
      toast.error("Please Fill all the Values");
      return ;
    }
    setLoading(true);
    try{
        const websiteId = uuidv4();
        const result = await axios.post('/api/website',{websiteId,domain, timeZone, enabledLocalhostTracking, userEmail:"abc"});
        router.push(`/dashboard/website/${result?.data?.id}`);
    }catch(err:any){
        toast.error(err?.response.data.message || "Unknown Error ! Please Retry");
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden">
      {/* Card Content */}
      <div className="p-6">
        <form className="space-y-6" onSubmit={(e) => handleFormSubmit(e)}>
          {/* Domain Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
              <Globe className="h-4 w-4 text-neutral-500" />
              Domain
            </Label>
            <div className="relative">
              <Input
                placeholder="https://yourwebsite.com"
                className="pl-[72px] h-11 bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-emerald-500 focus:ring-emerald-500/20"
               required type='url' onChange={(e)=>setDomain(e.target.value)} value={domain}/>
            </div>
            <p className="text-xs text-neutral-500">Enter your website domain </p>
          </div>

          {/* Timezone Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
              <Clock className="h-4 w-4 text-neutral-500" />
              Timezone
            </Label>
            <Select value={timeZone} onValueChange={(value)=>setTimeZone(value)}>
              <SelectTrigger className="w-full h-11 bg-neutral-900 border-neutral-700 text-white focus:border-emerald-500 focus:ring-emerald-500/20">
                <SelectValue placeholder="Select your timezone" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-700 text-white">
                <SelectGroup>
                  <SelectLabel className="text-neutral-500">North America</SelectLabel>
                  <SelectItem value="est" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Eastern Standard Time (EST)</SelectItem>
                  <SelectItem value="cst" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Central Standard Time (CST)</SelectItem>
                  <SelectItem value="mst" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Mountain Standard Time (MST)</SelectItem>
                  <SelectItem value="pst" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Pacific Standard Time (PST)</SelectItem>
                  <SelectItem value="akst" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Alaska Standard Time (AKST)</SelectItem>
                  <SelectItem value="hst" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Hawaii Standard Time (HST)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-neutral-500">Europe & Africa</SelectLabel>
                  <SelectItem value="gmt" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Greenwich Mean Time (GMT)</SelectItem>
                  <SelectItem value="cet" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Central European Time (CET)</SelectItem>
                  <SelectItem value="eet" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Eastern European Time (EET)</SelectItem>
                  <SelectItem value="west" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Western European Summer Time (WEST)</SelectItem>
                  <SelectItem value="cat" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Central Africa Time (CAT)</SelectItem>
                  <SelectItem value="eat" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">East Africa Time (EAT)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-neutral-500">Asia</SelectLabel>
                  <SelectItem value="msk" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Moscow Time (MSK)</SelectItem>
                  <SelectItem value="ist" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">India Standard Time (IST)</SelectItem>
                  <SelectItem value="cst_china" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">China Standard Time (CST)</SelectItem>
                  <SelectItem value="jst" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Japan Standard Time (JST)</SelectItem>
                  <SelectItem value="kst" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Korea Standard Time (KST)</SelectItem>
                  <SelectItem value="ist_indonesia" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Indonesia Central Standard Time (WITA)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-neutral-500">Australia & Pacific</SelectLabel>
                  <SelectItem value="awst" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Australian Western Standard Time (AWST)</SelectItem>
                  <SelectItem value="acst" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Australian Central Standard Time (ACST)</SelectItem>
                  <SelectItem value="aest" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Australian Eastern Standard Time (AEST)</SelectItem>
                  <SelectItem value="nzst" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">New Zealand Standard Time (NZST)</SelectItem>
                  <SelectItem value="fjt" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Fiji Time (FJT)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-neutral-500">South America</SelectLabel>
                  <SelectItem value="art" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Argentina Time (ART)</SelectItem>
                  <SelectItem value="bot" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Bolivia Time (BOT)</SelectItem>
                  <SelectItem value="brt" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Brasilia Time (BRT)</SelectItem>
                  <SelectItem value="clt" className="text-neutral-200 focus:bg-neutral-800 focus:text-white">Chile Standard Time (CLT)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Localhost Tracking Option */}
          <div className="rounded-lg border border-neutral-800 bg-neutral-800/30 p-4">
            <div className="flex items-start gap-3">
              <Checkbox 
                id="localhost" 
                className="mt-0.5 border-neutral-600 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
               onCheckedChange={(value:boolean)=>setEnabledLocalhostTracking(value)} checked = {enabledLocalhostTracking}/>
              <div className="flex-1">
                <Label htmlFor="localhost" className="text-sm font-medium text-neutral-200 cursor-pointer flex items-center gap-2">
                  <Server className="h-4 w-4 text-neutral-500" />
                  Enable localhost tracking
                </Label>
                <p className="text-xs text-neutral-500 mt-1">
                  Track analytics from localhost for development and testing purposes
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button 
              type="submit"
              className="w-full h-11 bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors" disabled = {loading}
            >
              {loading ? <Loader2Icon className='animate-spin'/>: <><Plus className="mr-2 h-4 w-4" />
              Add Website </>}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default WebsiteForm