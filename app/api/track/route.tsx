import { NextRequest, NextResponse } from "next/server";
import {UAParser} from 'ua-parser-js'
export async function POST(req: NextRequest){
    const body = await req.json();
    console.log("data is ", body);
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
    console.log(body, deviceInfo, osInfo, browserInfo, geoInfo);

    return NextResponse.json({message:"Data Received"},{status: 200});
}