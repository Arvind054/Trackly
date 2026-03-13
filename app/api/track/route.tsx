import { db } from "@/src/DB";
import { pageViewsTable } from "@/src/DB/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { UAParser } from 'ua-parser-js'
import { eventQueue } from "@/queues/eventQueues";
const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS(req: Request) {
    const origin = req.headers.get("origin") || '*';
    return new NextResponse(null, {
        status: 200,
        headers: CORS_HEADERS,
    });
}

function getClientIP(req: Request) {

    const vercelIP = req.headers.get("x-vercel-forwarded-for");
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
    let geoInfo = null;

    if (ip && !ip.startsWith("10.") && !ip.startsWith("192.168")) {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
        geoInfo = await geoRes.json();
    }

    //Insert to Queue
    await eventQueue.add("track-event", {
        ...body,
        device: deviceInfo,
        os: osInfo,
        browser: browserInfo,
        geoInfo,
        ip
    });
    return NextResponse.json({ message: "Added to Queue"}, { headers: CORS_HEADERS });
}