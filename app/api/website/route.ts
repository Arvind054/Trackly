import { db } from "@/src/DB";
import { websiteTable, user } from "@/src/DB/schema";
import { and, desc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth"

import { headers } from "next/headers"

// For Adding a New Website
export async function POST(req: NextRequest){
    const {websiteId, domain, timeZone,enabledLocalhostTracking, userEmail} = await  req.json();
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [userData] = await db
      .select()
      .from(user)
      .where(eq(user.id, session.user.id))
      .limit(1);
    if (!userData || !userData.email) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isExistingDomain = await db.select().from(websiteTable).where(and(eq(websiteTable?.domain, domain), eq(websiteTable?.userEmail, userEmail)));
    if(isExistingDomain.length > 0){
        return NextResponse.json({message:"Domain Already Exists",data:isExistingDomain[0]}, {status:400},);
    }
    const [result]  = await db.insert(websiteTable).values({
        websiteId: websiteId,
        domain:domain,
        timeZone: timeZone,
        enabledLocalhostTracking:enabledLocalhostTracking,
        userEmail:userData.email
    }).returning();
    return NextResponse.json(result);
}

// To fetch all the websites of the User
export async function GET(req: NextRequest){
   
   try{
       const session = await auth.api.getSession({headers: await headers(),});
       if (!session?.user?.id) {return NextResponse.json({ error: "Unauthorized" }, { status: 401 })};
       const [userData] = await db.select().from(user).where(eq(user.id, session.user.id)).limit(1);
       const email = userData?.email;
       if (!userData || !email) {
           return NextResponse.json({ error: "User not found" }, { status: 404 })
        }
    const result  = await db.select().from(websiteTable).where(eq(websiteTable.userEmail,email)).orderBy(desc(websiteTable.id));
    return NextResponse.json(result);
   }catch(err){
       return NextResponse.json({ error: "Error Fetching data" }, { status: 500 })
   }

}