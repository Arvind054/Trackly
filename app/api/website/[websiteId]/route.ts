import { db } from "@/src/DB";
import { websiteTable, user } from "@/src/DB/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// Fetch a single website by ID
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ websiteId: string }> }
) {
  try {
    const { websiteId } = await params;
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

    const [website] = await db
      .select()
      .from(websiteTable)
      .where(eq(websiteTable.websiteId, websiteId))
      .limit(1);
    if (!website) {
      return NextResponse.json({ error: "Website not found" }, { status: 404 });
    }

    // Check if the website belongs to the authenticated user
    if (website.userEmail !== userData.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }
    return NextResponse.json(website);
  } catch (err) {
    return NextResponse.json(
      { error: "Error fetching website" },
      { status: 500 }
    );
  }
}
