import {Queue} from "bullmq";
import {connection} from "@/lib/redis";

export const eventQueue = new Queue("Trackly-events", {
    connection
});