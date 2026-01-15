import { db } from "@/src/DB";
import { websiteTable } from "@/src/DB/schema";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";


// For Adding a New Website
export async function POST(req: NextRequest){
    const {websiteId, domain, timeZone,enabledLocalhostTracking, userEmail} = await  req.json();

    const isExistingDomain = await db.select().from(websiteTable).where(and(eq(websiteTable?.domain, domain), eq(websiteTable?.userEmail, userEmail)));
    if(isExistingDomain.length > 0){
        return NextResponse.json({message:"Domain Already Exists",data:isExistingDomain[0]}, {status:400},);
    }
    const result  = await db.insert(websiteTable).values({
        websiteId: websiteId,
        domain:domain,
        timeZone: timeZone,
        enabledLocalhostTracking:enabledLocalhostTracking,
        userEmail:userEmail
    }).returning();
    return NextResponse.json(result);
}