import { db } from "@/src/DB";
import { pageViewsTable } from "@/src/DB/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import {UAParser} from 'ua-parser-js'
export async function POST(req: NextRequest){
    const body = await req.json();
    //Device Info
    const parser =new  UAParser(req.headers.get('user-agent')|| '');
    const deviceInfo = parser.getDevice()?.model;
    const osInfo = parser.getOS()?.name;
    const browserInfo = parser.getBrowser()?.name;
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || '99.99.45.65';
    // Get Geolocation
    const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
    const geoInfo = await geoRes.json();

    //Insert to DB
    let result;
    if(body?.type =='entry'){
      result = await db.insert(pageViewsTable).values({
        visitorId: body.visitorId,
         websiteId: body.websiteId,
         domain: body.domain,
         url:body.url || '',
         type:body.type,
         referrer: body.referrer,
        entryTime: body.entryTime,
        exitTime: body.exitTime,
        totalActiveTime: body.totalActiveTime,
        url_params: body.urlParams,
        utm_source: body.utm_source,
        utm_medium: body.utm_media,
        utm_campaign:body.utm_campaign,
        device:deviceInfo,
        os:osInfo,
        browser: browserInfo,
        city: geoInfo.city,
        region: geoInfo.region,
        country: geoInfo.country,
        countryCode:geoInfo.countryCode,
        ipAddress: ip || '',
        refParams: body.refParams,
     }).returning();
    
    }else{
        result = await db.update(pageViewsTable).set({
            exitTime:body.exitTime,
            totalActiveTime:body.totalActiveTime,
        }).where(eq(pageViewsTable.visitorId, body?.visitorId)).returning();
    }
     return NextResponse.json({message:"Data Received", data: result},{status: 200});
}