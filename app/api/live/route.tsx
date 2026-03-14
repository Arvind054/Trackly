import { db } from "@/src/DB";
import { liveUserTable, pageViewsTable } from "@/src/DB/schema";
import { and, eq ,gt} from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";
import { redis } from "@/lib/redis";
const CORS_HEADERS = {
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers':'Content-Type',
}

export async function OPTIONS(req:Request){
    const origin = req.headers.get("origin") || '*';
    return new NextResponse(null,{
        status:200,
        headers:CORS_HEADERS,
    });
}

export async function POST(req: NextRequest){
try {
    const body = await req.json();
    const { visitorId, websiteId,} = body;
      // Add to Redis
      await redis.zadd(`live:${websiteId}`,Date.now(),visitorId);
    return NextResponse.json({ status: "ok" },{headers:CORS_HEADERS});
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { status: "error", message: err.message },
      {headers:CORS_HEADERS}
    );
  }
}

export async function GET(req: NextRequest){
     const websiteId = req.nextUrl.searchParams.get("websiteId");
  const now = Date.now();
  const key = `live:${websiteId}`;
  await redis.zremrangebyscore(key, 0, now - 30000);
  const activeUsers = await redis.zcard(key);
  console.log("active users are ", activeUsers);
  return NextResponse.json(activeUsers);
}