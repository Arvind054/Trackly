import "dotenv/config";
import {drizzle} from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless";


// DB initialisation
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);