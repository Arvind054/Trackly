import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

// DB initialisation with fetch options to prevent hanging
const sql = neon(process.env.DATABASE_URL!, {
  fetchOptions: {
    cache: "no-store",
  },
});

export const db = drizzle(sql);