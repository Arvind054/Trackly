import "dotenv/config";
import {Worker} from "bullmq";
import {connection} from "../lib/redis";
import { db } from "../src/DB";
import { pageViewsTable } from "../src/DB/schema";
import { eq } from "drizzle-orm";

const worker = new Worker(
    "Trackly-events",
    async(job)=>{
        const body  = job.data;
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
            device: body.deviceInfo,
            os: body.osInfo,
            browser: body.browserInfo,
            city: body.geoInfo.city,
            region: body.geoInfo.region,
            country: body.geoInfo.country,
            countryCode: body.geoInfo.countryCode,
            ipAddress: body.ip || '',
            refParams: body.refParams,
        }).returning();

    } else {
        result = await db.update(pageViewsTable).set({
            exitTime: body.exitTime,
            totalActiveTime: body.totalActiveTime,
            exitUrl: body?.exitUrl,
        }).where(eq(pageViewsTable.visitorId, body?.visitorId)).returning();
    }
    return result;
    },
    {
        connection
    }
);

worker.on("completed", (job)=>{
    console.log(`Job: ${job.id} completed`);    
});

worker.on("failed", (job,err)=>{
    console.log(`Failled to Complete: `, err);
})
