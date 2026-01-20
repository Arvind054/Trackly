import { db } from "@/src/DB";
import { pageViewsTable } from "@/src/DB/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { UAParser } from 'ua-parser-js'

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS(req: Request) {
    const origin = req.headers.get("origin") || '*';
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': 'origin',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',

        },
    });
}

function getClientIP(req: Request) {

    const vercelIP = req.headers.get("x-vercel-forwarded-for");
    console.log(vercelIP)
    if (vercelIP) return vercelIP.split(",")[0].trim();


    const xff = req.headers.get("x-forwarded-for");
    if (xff) return xff.split(",")[0].trim();


    const realIp = req.headers.get("x-real-ip");
    if (realIp) return realIp;

    return null;
}
export async function POST(req: NextRequest) {
    const body = await req.json();
    //Device Info
    const parser = new UAParser(req.headers.get('user-agent') || '');
    const deviceInfo = parser.getDevice()?.model;
    const osInfo = parser.getOS()?.name;
    const browserInfo = parser.getBrowser()?.name;
    
    const ip = getClientIP(req) || "71.71.22.54";
    console.log(ip)
    let geoInfo = null;

    if (ip && !ip.startsWith("10.") && !ip.startsWith("192.168")) {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
        geoInfo = await geoRes.json();
    }

    //Insert to DB
    let result;
    if (body?.type == 'entry') {
        result = await db.insert(pageViewsTable).values({
            visitorId: body.visitorId,
            websiteId: body.websiteId,
            domain: body.domain,
            url: body.url || '',
            type: body.type,
            referrer: body.referrer,
            entryTime: body.entryTime,
            exitTime: body.exitTime,
            totalActiveTime: body.totalActiveTime,
            url_params: body.urlParams,
            utm_source: body.utm_source,
            utm_medium: body.utm_media,
            utm_campaign: body.utm_campaign,
            device: deviceInfo,
            os: osInfo,
            browser: browserInfo,
            city: geoInfo.city,
            region: geoInfo.region,
            country: geoInfo.country,
            countryCode: geoInfo.countryCode,
            ipAddress: ip || '',
            refParams: body.refParams,
        }).returning();

    } else {
        result = await db.update(pageViewsTable).set({
            exitTime: body.exitTime,
            totalActiveTime: body.totalActiveTime,
            exitUrl: body?.exitUrl,
        }).where(eq(pageViewsTable.visitorId, body?.visitorId)).returning();
    }
    return NextResponse.json({ message: "Data Received", data: result }, { headers: CORS_HEADERS });
}